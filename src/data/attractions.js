export const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: 'Sparkles' },
  { id: 'pacotes', label: 'Pacotes', icon: 'Ticket' },
  { id: 'promocionais', label: 'Promocionais', icon: 'Percent' },
  { id: 'cupons', label: 'Cupons de desconto', icon: 'Tag' },
  { id: 'parques', label: 'Parques', icon: 'Trees' },
  { id: 'conhecendo', label: 'Conhecendo Curitiba', icon: 'Compass' },
  { id: 'restaurantes', label: 'Restaurantes', icon: 'Utensils' },
  { id: 'shows', label: 'Shows e Espetáculos', icon: 'Music' },
];

export const BRAND_LANDMARKS = [
  { id: 'jardim-botanico', name: 'Jardim Botânico', icon: 'Trees', desc: 'Estufa icônica em ferro e vidro estilo Palácio de Cristal' },
  { id: 'mon', name: 'Museu Oscar Niemeyer', icon: 'Eye', desc: 'O famoso Museu do Olho com arquitetura futurista' },
  { id: 'bonde', name: 'Bonde Elétrico', icon: 'Train', desc: 'Símbolo da mobilidade e do calçadão da Rua XV' },
  { id: 'torre', name: 'Torre Panorâmica', icon: 'TowerControl', desc: 'Mirante 360° com vista para toda a cidade' },
  { id: 'capivara', name: 'Capivara', icon: 'Smile', desc: 'Mascote oficial e habitual moradora dos parques' },
  { id: 'opera', name: 'Ópera de Arame', icon: 'Landmark', desc: 'Teatro tubular integrado à natureza e lago' },
  { id: 'flor', name: 'Flor do Parque', icon: 'Flower2', desc: 'Flora exuberante dos parques e alamedas floridas' },
  { id: 'paco', name: 'Paço da Liberdade', icon: 'Building2', desc: 'Patrimônio histórico cultural e café histórico' },
];

export const ATTRACTIONS = [
  {
    id: 'parque-jaime-lerner',
    title: 'Parque Jaime Lerner',
    subtitle: 'Abranches • Curitiba',
    location: 'Abranches • Curitiba',
    category: 'parques',
    categories: ['parques', 'pacotes', 'conhecendo'],
    discount: '33% OFF',
    rating: 4.8,
    reviewsCount: 170,
    duration: '2 a 3 horas',
    price: 39.90,
    originalPrice: 59.90,
    isFree: false,
    paymentTerms: 'Pague em até 3x',
    lat: -25.3780,
    lng: -49.2790,
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Um belíssimo e recém-planejado parque no bairro Abranches, celebrando o legado ecológico de Curitiba com lagos, ciclovias e áreas de contemplação. Homenagem ao urbanista Jaime Lerner, o parque integra mata nativa preservada com mirantes sustentáveis.',
    features: ['Acessibilidade total', 'Estacão de bicicletas', 'Área pet friendly', 'Lanchonete sustentável']
  },
  {
    id: 'jardim-botanico',
    title: 'Jardim Botânico de Curitiba',
    subtitle: 'Jardim Botânico • Curitiba',
    location: 'Jardim Botânico • Curitiba',
    category: 'parques',
    categories: ['parques', 'conhecendo'],
    discount: null,
    rating: 4.9,
    reviewsCount: 3200,
    duration: '2 a 3 horas',
    price: 0,
    originalPrice: null,
    isFree: true,
    paymentTerms: 'Entrada Gratuita',
    lat: -25.4431,
    lng: -49.2398,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'O cartão-postal mais famoso de Curitiba. Possui estufa de ferro e vidro inspirada no Palácio de Cristal de Londres, jardins geométricos no estilo francês e o Jardim das Sensações.',
    features: ['Estufa climatizada', 'Jardim das Sensações', 'Museu Botânico', 'Visitas guiadas']
  },
  {
    id: 'city-tour-linha-turismo',
    title: 'City Tour Linha Turismo',
    subtitle: 'Centro • Curitiba',
    location: 'Centro • Curitiba',
    category: 'conhecendo',
    categories: ['conhecendo', 'pacotes', 'promocionais'],
    discount: '25% OFF',
    rating: 4.8,
    reviewsCount: 1250,
    duration: 'Dia todo',
    price: 50.00,
    originalPrice: 66.00,
    isFree: false,
    paymentTerms: 'Pague em até 3x',
    lat: -25.4284,
    lng: -49.2733,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Linha de ônibus especial panorâmico de andar duplo que percorre os 26 principais pontos turísticos da cidade. O bilhete permite embarques ilimitados em um período de 24h.',
    features: ['Ônibus panorâmico', 'Áudio-guia multilingue', '26 paradas turísticas', 'Wi-Fi a bordo']
  },
  {
    id: 'jantar-madalosso',
    title: 'Jantar Madalosso Santa Felicidade',
    subtitle: 'Santa Felicidade • Curitiba',
    location: 'Santa Felicidade • Curitiba',
    category: 'restaurantes',
    categories: ['restaurantes', 'promocionais', 'cupons'],
    discount: '17% OFF',
    rating: 4.7,
    reviewsCount: 860,
    duration: '3 horas',
    price: 99.90,
    originalPrice: 120.00,
    isFree: false,
    paymentTerms: 'Pague em até 3x',
    lat: -25.4055,
    lng: -49.3300,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Tradicional rodízio italiano no bairro gastronômico de Santa Felicidade. Desfrute de frango a passarinho, polenta crocante, risotos e mais de 10 variedades de massas artesanais.',
    features: ['Rodízio completo', 'Vinhos da casa inclusos', 'Espaço kids', 'Estacamento gratuito']
  },
  {
    id: 'opera-de-arame-acustico',
    title: 'Ópera de Arame Acústico',
    subtitle: 'Abranches • Curitiba',
    location: 'Abranches • Curitiba',
    category: 'shows',
    categories: ['shows', 'promocionais', 'pacotes'],
    discount: '36% OFF',
    rating: 4.8,
    reviewsCount: 420,
    duration: '2 horas',
    price: 90.00,
    originalPrice: 140.00,
    isFree: false,
    paymentTerms: '12x Sem Juros',
    lat: -25.3850,
    lng: -49.2764,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Teatro espetacular construído em tubos de aço sobre um lago de uma antiga pedreira. O palco flutuante e a iluminação noturna proporcionam uma atmosfera mágica e inesquecível.',
    features: ['Palco sobre as águas', 'Restaurante do Lago', 'Vale da Música', 'Arquitetura única']
  },
  {
    id: 'serra-verde-express',
    title: 'Serra Verde Express: Curitiba-Morretes',
    subtitle: 'Rodoviária • Curitiba',
    location: 'Rodoviária • Curitiba',
    category: 'pacotes',
    categories: ['pacotes', 'promocionais', 'conhecendo'],
    discount: '27% OFF',
    rating: 4.9,
    reviewsCount: 4200,
    duration: 'Dia todo',
    price: 219.00,
    originalPrice: 299.00,
    isFree: false,
    paymentTerms: '12x Sem Juros',
    lat: -25.4370,
    lng: -49.2568,
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Considerada uma das viagens de trem mais bonitas do mundo pelo The Wall Street Journal. Atravessa a vertiginosa Ponte do Viaduto do Carvalho e desce a Serra do Mar até a histórica Morretes com almoço típico de barreado.',
    features: ['Serviço de bordo', 'Almoço de Barreado incluso', 'Guia turístico bilíngue', 'Transfers inclusos']
  },
  {
    id: 'museu-oscar-niemeyer',
    title: 'Museu Oscar Niemeyer (MON)',
    subtitle: 'Centro Cívico • Curitiba',
    location: 'Centro Cívico • Curitiba',
    category: 'conhecendo',
    categories: ['conhecendo', 'pacotes'],
    discount: '25% OFF',
    rating: 4.9,
    reviewsCount: 2800,
    duration: '3 a 4 horas',
    price: 30.00,
    originalPrice: 40.00,
    isFree: false,
    paymentTerms: 'Pague em até 2x',
    lat: -25.4103,
    lng: -49.2672,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Conhecido nacionalmente como o "Museu do Olho", abriga exposições de artes visuais, arquitetura, design e a icônica torre em formato de olho desenhada por Oscar Niemeyer.',
    features: ['Exposições internacionais', 'Café MON', 'Loja de souvenirs', 'Parque de esculturas']
  },
  {
    id: 'torre-panorámica',
    title: 'Torre Panorâmica de Curitiba',
    subtitle: 'Mercês • Curitiba',
    location: 'Mercês • Curitiba',
    category: 'conhecendo',
    categories: ['conhecendo', 'cupons'],
    discount: null,
    rating: 4.6,
    reviewsCount: 1100,
    duration: '1 hora',
    price: 10.00,
    originalPrice: null,
    isFree: false,
    paymentTerms: 'Sem taxas extras',
    lat: -25.4215,
    lng: -49.2941,
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Com 109 metros de altura, a torre de telefonia oferece uma visão panorâmica em 360° de toda a região metropolitana de Curitiba e das montanhas da Serra do Mar.',
    features: ['Mirante 360°', 'Painel cerâmico de Poty Lazzarotto', 'Museu do Telefone', 'Binóculos panorâmicos']
  }
];

export const HERO_SLIDES = [
  {
    badge: 'DESTAQUE',
    title: 'Curitiba 360: Viva a Cidade em Todos os Sentidos',
    subtitle: 'Conectando você às melhores experiências da capital ecológica: shows, parques, gastronomia e passeios integrados.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Explorar Experiências'
  },
  {
    badge: 'OFERTA DA SEMANA',
    title: 'Passeio Encantador na Serra do Mar',
    subtitle: 'Desconto exclusivo de 27% no passeio de trem Curitiba-Morretes com almoço de Barreado incluso.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Garantir Ingresso'
  },
  {
    badge: 'CULTURA & ARTE',
    title: 'Noites Mágicas na Ópera de Arame',
    subtitle: 'Aproveite shows acústicos sobre as águas cristalinas do lago da pedreira.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Ver Programação'
  }
];
