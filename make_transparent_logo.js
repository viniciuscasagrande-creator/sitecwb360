import fs from 'fs';
import zlib from 'zlib';

const inputPath = 'C:/Users/vinad/OneDrive/Imagens/logo.png';
const outputPath = 'C:/Users/vinad/OneDrive/Documentos/SITE CWB 360/public/logos/logo_transparent.png';

const buf = fs.readFileSync(inputPath);

// Extract width and height from IHDR
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`Processing PNG (${width}x${height})...`);

// Extract all IDAT chunks data
let offset = 8; // skip PNG signature
const idatChunks = [];

while (offset < buf.length) {
  const length = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    idatChunks.push(buf.slice(offset + 8, offset + 8 + length));
  }
  offset += 12 + length;
}

const compressed = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(compressed);

// Color type 6 (RGBA), 4 bytes per pixel + 1 filter byte per row
const rowBytes = width * 4 + 1;
const rawPixels = Buffer.alloc(width * height * 4);

// Unfilter scanlines (assuming 0=None, 1=Sub, 2=Up, 3=Average, 4=Paeth)
let srcPos = 0;
for (let y = 0; y < height; y++) {
  const filterType = decompressed[srcPos++];
  const rowStart = y * width * 4;

  for (let x = 0; x < width * 4; x++) {
    let filt = decompressed[srcPos++];
    let recon = 0;
    const a = x >= 4 ? rawPixels[rowStart + x - 4] : 0;
    const b = y > 0 ? rawPixels[(y - 1) * width * 4 + x] : 0;
    const c = (x >= 4 && y > 0) ? rawPixels[(y - 1) * width * 4 + x - 4] : 0;

    if (filterType === 0) recon = filt;
    else if (filterType === 1) recon = (filt + a) & 0xff;
    else if (filterType === 2) recon = (filt + b) & 0xff;
    else if (filterType === 3) recon = (filt + Math.floor((a + b) / 2)) & 0xff;
    else if (filterType === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      let pr = c;
      if (pa <= pb && pa <= pc) pr = a;
      else if (pb <= pc) pr = b;
      recon = (filt + pr) & 0xff;
    }

    rawPixels[rowStart + x] = recon;
  }
}

// Convert near-white background pixels (R>220, G>220, B>220) to Alpha=0 (transparent)
let transparentCount = 0;
for (let i = 0; i < rawPixels.length; i += 4) {
  const r = rawPixels[i];
  const g = rawPixels[i + 1];
  const b = rawPixels[i + 2];
  if (r > 220 && g > 220 && b > 220) {
    rawPixels[i + 3] = 0; // Set Alpha to transparent
    transparentCount++;
  }
}
console.log(`Converted ${transparentCount} white pixels to transparent.`);

// Re-encode into PNG IDAT format (filter type 0 for all rows)
const outputDecompressed = Buffer.alloc(height * (width * 4 + 1));
let outPos = 0;
for (let y = 0; y < height; y++) {
  outputDecompressed[outPos++] = 0; // Filter None
  const rowStart = y * width * 4;
  rawPixels.copy(outputDecompressed, outPos, rowStart, rowStart + width * 4);
  outPos += width * 4;
}

const newIDATData = zlib.deflateSync(outputDecompressed);

// Build new PNG
function calcCRC(buf) {
  let crc = 0xffffffff;
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(typeStr, data) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(typeStr, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crc = calcCRC(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

// IHDR data
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8; // 8 bit depth
ihdr[9] = 6; // RGBA
ihdr[10] = 0; // Compression
ihdr[11] = 0; // Filter
ihdr[12] = 0; // Interlace

const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ihdrChunk = createChunk('IHDR', ihdr);
const idatChunk = createChunk('IDAT', newIDATData);
const iendChunk = createChunk('IEND', Buffer.alloc(0));

const finalPNG = Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
fs.writeFileSync(outputPath, finalPNG);
console.log(`Saved transparent logo to ${outputPath} (${finalPNG.length} bytes)!`);
