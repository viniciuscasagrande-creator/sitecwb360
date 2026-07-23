import React, { useState } from 'react';
import { 
  Trees, Eye, Compass, Sparkles, Navigation, Landmark, Train, TowerControl as Tower,
  Smile, Flower2, Utensils, ShoppingBag, Music, Drama, Bus, Beer, Wine, CheckCircle2,
  Clock, MapPin, Ticket, ExternalLink, ChevronRight, Info, Star, Maximize2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ATTRACTIONS } from '../data/attractions';

export const TOP_20_LANDMARKS = [
  {
    id: 'jardim-botanico',
    number: 1,
    title: 'Jardim Botânico de Curitiba',
    subtitle: 'Estufa de Vidro & Jardim das Sensações',
    category: 'Parque Ecológico',
    icon: Trees,
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Bairro Jardim Botânico • Eng. Ostoja Roguski, s/n',
    howToGet: 'Linha Turismo (Parada 1) ou BRT Centenário / Campo Comprido (Estação Botânico)',
    hours: 'Segunda a Domingo: 06h às 19h30 (Estufa) / 09h às 17h (Jardim das Sensações)',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.9,
    reviewsCount: 12450,
    duration: '2 a 3 horas',
    isFree: true,
    priceVal: 0,
    description: 'O principal cartão-postal da Capital Ecológica do Brasil! Inaugurado em 1991, destaca-se pela estufa em estrutura metálica e vidro inspirada no Palácio de Cristal de Londres, cercada por jardins em estilo francês, o Museu Botânico e o sensorial Jardim das Sensações.',
    tip: 'O melhor horário para fotos com luz perfeita na estufa é entre 16h30 e 18h no pôr do sol.'
  },
  {
    id: 'mon',
    number: 2,
    title: 'Museu Oscar Niemeyer (MON)',
    subtitle: 'O Famoso "Museu do Olho"',
    category: 'Cultura & Arte',
    icon: Eye,
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro Cívico • Marechal Hermes, 999',
    howToGet: 'Linha Turismo (Parada MON) ou Ônibus Interbairros I / Ahu-Los Angeles',
    hours: 'Terça a Domingo: 10h às 18h (Quarta-feira entrada grátis)',
    price: 'R$ 30,00 (Inteira) / R$ 15,00 (Meia)',
    rating: 4.9,
    reviewsCount: 9800,
    duration: '3 horas',
    isFree: false,
    priceVal: 30.0,
    description: 'Um dos maiores complexos de arte da América Latina projetado pelo renomado arquiteto Oscar Niemeyer. Conhecido nacionalmente como o "Museu do Olho" devido ao imponente anexo de 30 metros de altura.',
    tip: 'O gramado atrás do museu (Parcão) é o ponto oficial de encontro de cães e piqueniques à tarde.'
  },
  {
    id: 'opera-de-arame',
    number: 3,
    title: 'Ópera de Arame & Vale da Música',
    subtitle: 'Teatro Tubular sobre o Lago',
    category: 'Teatro & Shows',
    icon: Compass,
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Pilarzinho / Abranches • R. João Gava, 970',
    howToGet: 'Linha Turismo (Parada Ópera de Arame) ou Ônibus Mateus Leme / Nilo Peçanha',
    hours: 'Terça a Domingo: 10h às 18h (Shows no Palco Flutuante das 11h às 17h)',
    price: 'R$ 15,00 (Passaporte Vale da Música)',
    rating: 4.8,
    reviewsCount: 8600,
    duration: '2 horas',
    isFree: false,
    priceVal: 15.0,
    description: 'Construída em apenas 75 dias com tubos de aço e teto transparente de policarbonato, a Ópera de Arame flutua sobre o lago de uma antiga pedreira desativada cercada pela vegetação da Mata Atlântica.',
    tip: 'Aproveite o café panorâmico no deck do lago ouvindo os shows de Jazz ao vivo flutuantes.'
  },
  {
    id: 'tangua',
    number: 4,
    title: 'Parque Tanguá',
    subtitle: 'Mirante do Castelo & Cascata de 65m',
    category: 'Parque & Vista 360°',
    icon: Sparkles,
    color: '#ea580c',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Taboão / Pilarzinho • R. Oswaldo Maciel, s/n',
    howToGet: 'Linha Turismo (Parada Parque Tanguá) ou Ônibus Nilo Peçanha',
    hours: 'Aberto 24 horas (Iluminação noturna e segurança até 22h)',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.9,
    reviewsCount: 7900,
    duration: '2 horas',
    isFree: true,
    priceVal: 0,
    description: 'Construído na pedreira desativada da Pedreira de Curitiba, o Parque Tanguá impressiona pelo mirante em forma de castelo clássico, espelho d\'água com chafariz e um túnel de rocha perfurado conectando os lagos.',
    tip: 'Eleito o pôr do sol mais bonito de Curitiba no mirante do castelo sobre a antiga pedreira.'
  },
  {
    id: 'barigui',
    number: 5,
    title: 'Parque Barigui',
    subtitle: 'Recanto das Capivaras & Lago Maior',
    category: 'Lazer & Natureza',
    icon: Trees,
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Bigorrilho / Campina do Siqueira • Av. Cândido Hartmann',
    howToGet: 'Linha Turismo (Parada Barigui) ou BRT Centenário / Campo Comprido (Estação Campina do Siqueira)',
    hours: 'Aberto 24 horas todos os dias',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.8,
    reviewsCount: 11200,
    duration: '3 a 4 horas',
    isFree: true,
    priceVal: 0,
    description: 'O maior e mais frequentado parque de Curitiba! Possui 1,4 milhão de m², abrigando o grande lago central onde o bando oficial de capivaras vive livremente, alamedas para corrida, churrasqueiras e o Centro de Eventos Positivo.',
    tip: 'As capivaras costumam pastar no gramado próximo ao restaurante do lago no fim da tarde.'
  },
  {
    id: 'largo-da-ordem',
    number: 6,
    title: 'Centro Histórico & Largo da Ordem',
    subtitle: 'Casarões Coloniais & Feira de Artesanato',
    category: 'História & Tradição',
    icon: Landmark,
    color: '#b45309',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Bairro São Francisco • R. Mateus Leme / R. Claudino dos Santos',
    howToGet: 'Linha Turismo (Parada Largo da Ordem) ou a pé a 5 min da Praça Tiradentes',
    hours: 'Aberto 24h • Feira de Artesanato: Domingos das 09h às 14h',
    price: 'ACESSO LIVRE E GRATUITO',
    rating: 4.9,
    reviewsCount: 9400,
    duration: '2 a 3 horas',
    isFree: true,
    priceVal: 0,
    description: 'O berço da fundação de Curitiba em 1693! Preserva calçamentos de paralelepípedo, casarões em estilo colonial português e a famosa Feira de Artesanato de Domingo com mais de 1.000 expositores.',
    tip: 'Visite a Casa Romário Martins (edificação mais antiga de 1700) e beba um chopp no Bar do Alemão.'
  },
  {
    id: 'trem-serra-verde',
    number: 7,
    title: 'Passeio de Trem Serra Verde Express',
    subtitle: 'Curitiba a Morretes pela Mata Atlântica',
    category: 'Tour Ferroviário',
    icon: Train,
    color: '#2563eb',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Estação Ferroviária • Av. Presidente Affonso Camargo, 330',
    howToGet: 'Táxi / Uber até a Rodoferroviária de Curitiba ou Ônibus Aeroporto / Estação',
    hours: 'Saídas diárias de Curitiba às 08h30 (Chegada em Morretes às 12h30)',
    price: 'A partir de R$ 169,00 (Classe Turística com Guia)',
    rating: 5.0,
    reviewsCount: 14200,
    duration: 'Dia todo (8 horas)',
    isFree: false,
    priceVal: 169.0,
    description: 'Eleito um dos passeios de trem mais bonitos do mundo pelo Wall Street Journal e The Guardian! Percorre a ferrovia centenária de 1885 encravada na Serra do Mar Paranaense através de 13 túneis e pontes suspensas até a histórica cidade de Morretes.',
    tip: 'Reserve os assentos do lado esquerdo do trem no sentido Morretes para ver o abismo da Ponte São João.'
  },
  {
    id: 'torre-panoramica',
    number: 8,
    title: 'Torre Panorâmica de Curitiba',
    subtitle: 'Mirante 360° a 109 metros de Altura',
    category: 'Mirante & Skyline',
    icon: Tower,
    color: '#0284c7',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Bairro Mercês • R. Prof. Lycio Grein Castro Vellozo, 191',
    howToGet: 'Linha Turismo (Parada Torre Panorâmica) ou Ônibus Mercês / Savóia',
    hours: 'Terça a Domingo: 10h às 18h (Venda de ingressos encerra às 17h30)',
    price: 'R$ 10,00 (Inteira) / R$ 5,00 (Meia)',
    rating: 4.7,
    reviewsCount: 5400,
    duration: '1 hora',
    isFree: false,
    priceVal: 10.0,
    description: 'Única torre de telefonia no Brasil com deque de observação aberto ao público! Oferece uma visão circular de 360 graus de Curitiba a 109 metros de altura, com mapas ilustrativos de Poty Lazzarotto no saguão.',
    tip: 'Ideal para visualizar o traçado urbano planejado da cidade e a Serra do Mar no horizonte.'
  },
  {
    id: 'bosque-alemao',
    number: 9,
    title: 'Bosque Alemão & Trilha de João e Maria',
    subtitle: 'Torre dos Filósofos & Casa da Bruxa',
    category: 'Cultura Étnica',
    icon: Trees,
    color: '#15803d',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Bairro Vista Alegre • R. Niccolo Paganini / Franz Schubert',
    howToGet: 'Linha Turismo (Parada Bosque Alemão) ou Ônibus Jardim Schaffer',
    hours: 'Terça a Domingo: 08h às 18h (Contação de histórias na Casa da Bruxa nos fins de semana)',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.8,
    reviewsCount: 6200,
    duration: '2 horas',
    isFree: true,
    priceVal: 0,
    description: 'Homenagem aos imigrantes alemães de 1833! O parque conta com a Torre dos Filósofos em madeira com vista para as araucárias e uma trilha encantada em meio à mata que narra o conto de fadas dos Irmãos Grimm até a Casa da Bruxa.',
    tip: 'Percorra a trilha de azulejos ilustrados da historinha de João e Maria em meio às araucárias.'
  },
  {
    id: 'praca-do-japao',
    number: 10,
    title: 'Praça do Japão & Memorial Oriental',
    subtitle: 'Cerejeiras, Lagos de Carpas & Templo',
    category: 'Praça Histórica',
    icon: Flower2,
    color: '#dc2626',
    image: 'https://images.unsplash.com/photo-1528164344705-475426879e0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528164344705-475426879e0d?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Batel / Água Verde • Av. Sete de Setembro com R. Voluntários da Pátria',
    howToGet: 'Linha Turismo ou Ônibus BRT Santa Cândida / Capão Raso (Estação Praça do Japão)',
    hours: 'Praça aberta 24h • Memorial da Imigração: Terça a Domingo 09h às 18h',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.8,
    reviewsCount: 5100,
    duration: '1 hora',
    isFree: true,
    priceVal: 0,
    description: 'Homenagem aos imigrantes japoneses no Paraná! Possui 300 cerejeiras enviadas diretamente do Japão, lagos com carpas coloridas, pontes orientais e o Memorial da Imigração construído no estilo de templo de Kyoto.',
    tip: 'No inverno (Julho/Agosto), as 300 cerejeiras da praça florescem em um rosa espetacular.'
  },
  {
    id: 'santa-felicidade',
    number: 11,
    title: 'Bairro Italiano de Santa Felicidade',
    subtitle: 'Gastronomia Típica & Família Madalosso',
    category: 'Polo Gastronômico',
    icon: Utensils,
    color: '#b91c1c',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Santa Felicidade • Av. Manoel Ribas',
    howToGet: 'Linha Turismo (Parada Santa Felicidade) ou Ônibus Santa Felicidade / Toaldo Tulio',
    hours: 'Restaurantes abertos Almoço (11h30 às 15h) e Jantar (19h às 23h)',
    price: 'Rodízio Italiano a partir de R$ 79,00 por pessoa',
    rating: 4.9,
    reviewsCount: 11800,
    duration: '3 horas',
    isFree: false,
    priceVal: 79.0,
    description: 'O polo gastronômico italiano mais famoso do Brasil! Reúne dezenas de cantinas históricas, adegas artesanais e o Restaurante Família Madalosso (reconhecido pelo Guinness como o maior das Américas).',
    tip: 'Visite as vinícolas artesanais Durigan e Vinhos Velho Madalosso para degustar licores de cortesia.'
  },
  {
    id: 'mercado-municipal',
    number: 12,
    title: 'Mercado Municipal de Curitiba',
    subtitle: 'Pastel de Bacalhau & Setor Orgânico',
    category: 'Gastronomia & Compras',
    icon: ShoppingBag,
    color: '#ea580c',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro / Capanema • Av. Sete de Setembro, 1865',
    howToGet: 'Linha Turismo (Parada Mercado Municipal) ou Ônibus Estação / Aeroporto',
    hours: 'Terça a Sábado: 08h às 18h • Domingo: 08h às 13h (Praça de alimentação até 15h)',
    price: 'ENTRADA GRATUITA (Pratos a partir de R$ 25,00)',
    rating: 4.8,
    reviewsCount: 9600,
    duration: '2 horas',
    isFree: true,
    priceVal: 0,
    description: 'O principal centro de compras de especiarias e gastronomia de Curitiba desde 1958! Destaque para o primeiro Setor de Orgânicos do Brasil e a movimentada praça de alimentação.',
    tip: 'Experimente o tradicional Pastel de Bacalhau na praça de alimentação do setor orgânico.'
  },
  {
    id: 'pedreira-paulo-leminski',
    number: 13,
    title: 'Pedreira Paulo Leminski',
    subtitle: 'Maior Palco a Céu Aberto da América Latina',
    category: 'Arena de Shows',
    icon: Music,
    color: '#2563eb',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'São Lourenço / Abranches • R. João Gava, 970',
    howToGet: 'Linha Turismo ou Linhas Especiais de Ônibus em dias de grandes shows',
    hours: 'Aberto em dias de grandes shows e eventos festivais',
    price: 'Conforme bilheteria do show/evento em cartaz',
    rating: 4.9,
    reviewsCount: 8200,
    duration: 'Varia conforme o evento',
    isFree: false,
    priceVal: 120.0,
    description: 'O templo do rock e dos grandes festivais no Brasil! Uma arena natural com capacidade para 25 mil pessoas cercada por um paredão de rocha de 30 metros de altura.',
    tip: 'Integrado ao complexo do Parque das Pedreiras e da Ópera de Arame com vista para o paredão de rocha.'
  },
  {
    id: 'teatro-guaira',
    number: 14,
    title: 'Teatro Guaíra (Guairão)',
    subtitle: 'Sede da Orquestra Sinfônica do Paraná',
    category: 'Artes Cênicas',
    icon: Drama,
    color: '#9333ea',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro • Praça Santos Andrade, s/n',
    howToGet: 'Linha Turismo ou Ônibus BRT Centenário / Campo Comprido (Estação Círculo Militar)',
    hours: 'Bilheteria: Segunda a Domingo 10h às 22h • Espetáculos conforme agenda',
    price: 'Ingressos de espetáculos a partir de R$ 20,00',
    rating: 4.9,
    reviewsCount: 6800,
    duration: '2 horas',
    isFree: false,
    priceVal: 20.0,
    description: 'Um dos maiores complexos teatrais da América Latina! Abriga 3 auditórios, com destaque para o auditório Bento Munhoz da Rocha Neto (Guairão) com 2.173 lugares.',
    tip: 'Visite o auditório Guairão com seus 2.173 lugares e acústica perfeita projetada nos anos 70.'
  },
  {
    id: 'passeio-publico',
    number: 15,
    title: 'Passeio Público de Curitiba',
    subtitle: 'O Primeiro Parque da Cidade (Fundado em 1886)',
    category: 'Patrimônio Histórico',
    icon: Trees,
    color: '#16a34a',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro • R. Presidente Faria, s/n',
    howToGet: 'Linha Turismo (Parada Passeio Público) ou a pé do Centro Cívico',
    hours: 'Terça a Domingo: 06h às 20h (Segunda fechado para manutenção)',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.7,
    reviewsCount: 4800,
    duration: '1 a 2 horas',
    isFree: true,
    priceVal: 0,
    description: 'O parque mais antigo de Curitiba, criado pelo Presidente da Província em 1886! Foi o primeiro zoológico da cidade e conserva portões de ferro importados da França.',
    tip: 'Possui minizoológico com aves exóticas, aquário e pedalinhos no lago central.'
  },
  {
    id: 'praca-santos-andrade',
    number: 16,
    title: 'Praça Santos Andrade & Prédio Histórico da UFPR',
    subtitle: 'O Berço Universitário do Brasil',
    category: 'Arquitetura Histórica',
    icon: Landmark,
    color: '#1e3a8a',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro • Praça Santos Andrade',
    howToGet: 'A pé a 5 min da R. XV de Novembro ou Ônibus Círculo Militar',
    hours: 'Praça aberta 24h • Visitação ao prédio histórico conforme eventos acadêmicos',
    price: 'ACESSO LIVRE E GRATUITO',
    rating: 4.8,
    reviewsCount: 4200,
    duration: '1 hora',
    isFree: true,
    priceVal: 0,
    description: 'Marco arquitetônico neoclássico construído em 1912! Sede histórica da primeira universidade do Brasil, ladeada pelo Teatro Guaíra e a fonte iluminada.',
    tip: 'Visite a fachada neoclássica iluminada à noite em frente à fonte luminosa central.'
  },
  {
    id: 'bosque-papa',
    number: 17,
    title: 'Bosque João Paulo II (Memorial Polonês)',
    subtitle: 'Casas de Troncos Originais de 1871',
    category: 'Memorial Étnico',
    icon: Trees,
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro Cívico • R. Mateus Leme, s/n (Atrás do MON)',
    howToGet: 'Linha Turismo (Parada Memorial Polonês) ou a pé a partir do MON Olho',
    hours: 'Terça a Domingo: 09h às 18h',
    price: 'ENTRADA 100% GRATUITA',
    rating: 4.8,
    reviewsCount: 5300,
    duration: '1 a 2 horas',
    isFree: true,
    priceVal: 0,
    description: 'Inaugurado em 1980 durante a visita do Papa João Paulo II! Composto por 7 casas de troncos de encaixe sem pregos construídas pelos pioneiros imigrantes poloneses em 1871.',
    tip: 'Experimente as tortas típicas polonesas (Krowka e Maślaniki) na loja de artesanato das casinhas.'
  },
  {
    id: 'bar-do-alemao',
    number: 18,
    title: 'Bar do Alemão • Choperia Germânica',
    subtitle: 'Chopp Submarino & Carne de Onça',
    category: 'Botequim Tradicional',
    icon: Beer,
    color: '#d97706',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Centro Histórico • R. Dr. Claudino dos Santos, 63',
    howToGet: 'Linha Turismo (Parada Largo da Ordem) ou a pé da Praça Tiradentes',
    hours: 'Segunda a Domingo: 11h às 02h da manhã',
    price: 'Chopp Submarino com canequinho R$ 32,00',
    rating: 4.9,
    reviewsCount: 6100,
    duration: '2 a 3 horas',
    isFree: false,
    priceVal: 32.0,
    description: 'A choperia mais tradicional de Curitiba fundada em 1979! Conhecida pelo Chopp Submarino (chopp claro com caneco em miniatura de Steinhäger) e pratos típicos alemães.',
    tip: 'Guarde o pequeno canequinho de porcelana de Steinhäger que afunda dentro da caneca de chopp.'
  },
  {
    id: 'linha-turismo',
    number: 19,
    title: 'Linha Turismo Curitiba (Double-Decker)',
    subtitle: 'Ônibus Panorâmico por 26 Atrações',
    category: 'Transporte Turístico',
    icon: Bus,
    color: '#00a896',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Embarque Principal: Praça Tiradentes (ou em qualquer uma das 26 paradas)',
    howToGet: 'Ponto inicial na Praça Tiradentes (Centro de Curitiba)',
    hours: 'Terça a Domingo: Saídas a cada 30 minutos das 08h30 às 17h30',
    price: 'Cartão Embarque R$ 50,00 (5 embarques)',
    rating: 4.8,
    reviewsCount: 13500,
    duration: 'Dia todo (26 pontos)',
    isFree: false,
    priceVal: 50.0,
    description: 'Linha de ônibus turísticos de 2 andares de padrão internacional! Percorre um itinerário de 45 km passando pelos 26 principais cartões-postais da cidade com áudio bilíngue.',
    tip: 'Sente no andar superior aberto do ônibus para fotografar as araucárias e monumentos sem barreiras.'
  },
  {
    id: 'caminho-do-vinho',
    number: 20,
    title: 'Tour Caminho do Vinho (SJP RMC)',
    subtitle: 'Adegas Artesanais & Café Colonial',
    category: 'Turismo Rural RMC',
    icon: Wine,
    color: '#9f1239',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'São José dos Pinhais • RMC (a 20 min de Curitiba)',
    howToGet: 'Tour Guiado de Agência ou Carro/Uber pela BR-376 / Almirante Alexandrino',
    hours: 'Terça a Domingo: Adegas das 09h às 18h / Cafés coloniais a partir das 11h30',
    price: 'Entrada Grátis nas Adegas (Cafés a partir de R$ 65)',
    rating: 4.8,
    reviewsCount: 3900,
    duration: '4 a 6 horas',
    isFree: true,
    priceVal: 0,
    description: 'Circuito de turismo rural na Região Metropolitana com mais de 30 adegas italianas, restaurantes rústicos, colheita de morangos e tradicionais cafés coloniais de campo.',
    tip: 'Visite as adegas Vinhos Don Bourdon e Juliatto com degustações livres de vinhos coloniais e sucos.'
  }
];

export default function Top20LandmarksGrid({ onClickDetail }) {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState(TOP_20_LANDMARKS[0]);

  // Helper to trigger full modal
  const handleTriggerFullModal = (item) => {
    // Check if attraction exists in ATTRACTIONS dataset, or merge with rich defaults
    const foundInDataset = ATTRACTIONS.find(a => a.id === item.id || a.title.toLowerCase().includes(item.id));
    
    const fullAttractionObject = {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      location: item.location,
      category: foundInDataset?.category || 'parques',
      categories: foundInDataset?.categories || [item.category],
      topic: foundInDataset?.topic || 'parques',
      rating: item.rating || foundInDataset?.rating || 4.9,
      reviewsCount: item.reviewsCount || foundInDataset?.reviewsCount || 2500,
      duration: item.duration || foundInDataset?.duration || '2 horas',
      price: item.priceVal !== undefined ? item.priceVal : (foundInDataset?.price || 0),
      originalPrice: foundInDataset?.originalPrice || (item.priceVal ? item.priceVal * 1.2 : 0),
      isFree: item.isFree !== undefined ? item.isFree : (item.priceVal === 0),
      paymentTerms: item.price,
      lat: foundInDataset?.lat || -25.4284,
      lng: foundInDataset?.lng || -49.2733,
      image: item.image || foundInDataset?.image,
      gallery: item.gallery || foundInDataset?.gallery || [item.image],
      description: item.description || foundInDataset?.description || `${item.title} - ${item.subtitle}. ${item.tip}`,
      features: foundInDataset?.features || [
        `Localização: ${item.location}`,
        `Como Chegar: ${item.howToGet}`,
        `Horários: ${item.hours}`,
        `Ingressos / Entrada: ${item.price}`,
        `Dica Especialista: ${item.tip}`
      ],
      howToGet: item.howToGet,
      hours: item.hours,
      tip: item.tip,
      ticketTypes: foundInDataset?.ticketTypes || [
        { name: 'Ingresso Individual / Passaporte', price: item.priceVal || 0, desc: 'Acesso completo às instalações e áreas de visitação' }
      ]
    };

    if (onClickDetail) {
      onClickDetail(fullAttractionObject);
    }
  };

  return (
    <section style={{ maxWidth: '1280px', margin: '48px auto', padding: '0 20px' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
        <span style={{
          backgroundColor: '#e6fffa',
          color: '#00a896',
          fontSize: '12px',
          fontWeight: '800',
          padding: '5px 14px',
          borderRadius: '9999px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Star size={14} fill="#00a896" />
          <span>GUIA OFICIAL DOS 20 PRINCIPAIS PONTOS TURÍSTICOS</span>
        </span>

        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginTop: '12px', marginBottom: '8px' }}>
          Os 20 Pontos Turísticos Imperdíveis de Curitiba
        </h2>
        <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
          Guia completo com localização, como chegar, horários de funcionamento, preços e dicas de especialistas para você planejar a viagem perfeita. Clique em qualquer ponto para abrir a ficha técnica em alta definição.
        </p>
      </div>

      {/* Grid of 20 Top Landmarks (Interactive Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {TOP_20_LANDMARKS.map((item) => {
          const IconComp = item.icon || Trees;
          const isSelected = activeItem.id === item.id;

          return (
            <div
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                handleTriggerFullModal(item);
              }}
              className="hover-card-rise"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: isSelected ? `2px solid ${item.color}` : '1px solid #e2e8f0',
                boxShadow: isSelected ? `0 10px 25px rgba(0,0,0,0.12)` : '0 4px 12px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Image & Rank Badge */}
              <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Rank Badge #1 to #20 */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  fontWeight: '900',
                  fontSize: '13px',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ color: '#00a896' }}>#{item.number}</span>
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  {item.category}
                </div>

                {/* Full Screen Icon */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(15,23,42,0.65)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <Maximize2 size={15} />
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  {/* Title & Icon */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={18} color={item.color} />
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px', fontWeight: '500' }}>
                    {item.subtitle}
                  </p>

                  {/* Info Quick List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#475569', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={13} color="#00a896" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.location}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={13} color="#2563eb" style={{ flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.hours}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Ticket size={13} color="#ea580c" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: '800', color: item.price.includes('GRATUITA') || item.price.includes('GRÁTIS') ? '#16a34a' : '#2563eb' }}>
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTriggerFullModal(item);
                  }}
                  style={{
                    marginTop: '14px',
                    width: '100%',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '800',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(37,99,235,0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                  }}
                >
                  <span>Ver Informações Completas</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Landmark Details Full Banner Panel */}
      {activeItem && (
        <div style={{
          marginTop: '32px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '28px 32px',
          boxShadow: '0 16px 40px rgba(15,23,42,0.2)',
          border: '1px solid #1e293b',
          display: 'grid',
          gridTemplateColumns: '1fr',
          lgGridTemplateColumns: '1fr 340px',
          gap: '28px',
          alignItems: 'center'
        }} className="animate-fade-in">
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontWeight: '900', fontSize: '12px', padding: '3px 10px', borderRadius: '6px' }}>
                FICHA TÉCNICA #{activeItem.number}
              </span>
              <span style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: '600' }}>
                {activeItem.category}
              </span>
            </div>

            <h3 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '6px' }}>
              {activeItem.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
              {activeItem.subtitle}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr md:1fr md:1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '12px 16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#00a896" />
                  <span>Endereço / Bairro</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>
                  {activeItem.location}
                </div>
              </div>

              <div style={{ backgroundColor: '#1e293b', padding: '12px 16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Bus size={13} color="#2563eb" />
                  <span>Como Chegar</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#cbd5e1' }}>
                  {activeItem.howToGet}
                </div>
              </div>

              <div style={{ backgroundColor: '#1e293b', padding: '12px 16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} color="#f59e0b" />
                  <span>Horários de Funcionamento</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#cbd5e1' }}>
                  {activeItem.hours}
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(0,168,150,0.12)', border: '1px solid rgba(0,168,150,0.3)', padding: '12px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Info size={18} color="#00a896" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#e6fffa', fontWeight: '600' }}>
                <strong>Dica 360°:</strong> {activeItem.tip}
              </span>
            </div>
          </div>

          {/* Right Image Banner & Modal Trigger Button */}
          <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)'
            }} />
            <button
              onClick={() => handleTriggerFullModal(activeItem)}
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#00a896',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '800',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,168,150,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span>Abrir Ficha Técnica no Modal</span>
              <Maximize2 size={16} />
            </button>
          </div>

        </div>
      )}

    </section>
  );
}
