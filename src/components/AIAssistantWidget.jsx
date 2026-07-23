import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, X, Send, User, ChevronRight, RefreshCw, Compass, MapPin, Star } from 'lucide-react';
import { ATTRACTIONS } from '../data/attractions';

const QUICK_SUGGESTIONS = [
  "🌲 Quais os parques imperdíveis de Curitiba?",
  "🍺 Onde comer Carne de Onça e tomar Chopp Submarino?",
  "🏨 Recomende hotéis 5 estrelas no Batel",
  "🚂 Como funciona o passeio de trem para Morretes?",
  "🎭 Qual a programação de shows e teatros?",
  "🚌 Como andar na Linha Turismo e nos Tubos BRT?"
];

export default function AIAssistantWidget({ onSelectAttraction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Olá! Sou o **Assistente Virtual Curitiba 360**, seu guia virtual especialista em Curitiba e Região Metropolitana! 🌲✨\n\nPosso te ajudar a encontrar parques, bares, hotéis, shows, passeios de trem e restaurantes típicos. O que você gostaria de explorar hoje?',
      recommendations: []
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // AI Response Generator
  const generateAIResponse = (userText) => {
    const textLower = userText.toLowerCase().trim();
    let replyText = "";
    let recommendations = [];

    if (textLower.includes('parque') || textLower.includes('botanico') || textLower.includes('barigui') || textLower.includes('tangua') || textLower.includes('capivara') || textLower.includes('natureza')) {
      replyText = "Curitiba é a Capital Ecológica do Brasil! 🌿 Os principais parques imperdíveis são:\n\n1. **Jardim Botânico**: A famosa estufa de vidro estilo Palácio de Cristal de Londres (Entrada 100% Grátis).\n2. **Parque Barigui**: O lar oficial das capivaras e das alamedas de caminhada no lago.\n3. **Parque Tanguá**: O pôr do sol mais espetacular da cidade com cascata de 65m.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'parques' || a.id === 'jardim-botanico' || a.id === 'parque-tangua' || a.id === 'parque-barigui').slice(0, 3);
    } 
    else if (textLower.includes('bar') || textLower.includes('chopp') || textLower.includes('cerveja') || textLower.includes('onca') || textLower.includes('alemao') || textLower.includes('porks') || textLower.includes('pub')) {
      replyText = "A vida noturna e os botequins de Curitiba são lendários! 🍺 Confira as melhores opções:\n\n1. **Bar do Alemão**: O Chopp Submarino no Largo da Ordem com canequinho souvenir e Carne de Onça.\n2. **Porks - Porco & Chope**: Torresmo de rolo crocante e chopps a R$ 12.\n3. **We Are Bastards Pub**: 30 torneiras de chopp artesanal e rock no Água Verde.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'bares' || a.topic === 'bares').slice(0, 3);
    }
    else if (textLower.includes('hotel') || textLower.includes('pousada') || textLower.includes('hospedagem') || textLower.includes('batel') || textLower.includes('quarto') || textLower.includes('dormir')) {
      replyText = "Aqui estão as hospedagens mais bem avaliadas de Curitiba e região! 🏨\n\n1. **Radisson Hotel Curitiba 5★**: Luxo na Praça da Espanha (Batel) com SPA e piscina aquecida.\n2. **Nomaa Hotel Boutique 5★**: Design contemporâneo e café da manhã premiado.\n3. **Pousada Ilha do Mel**: Refúgio pé na areia com café caiçara.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'hoteis' || a.topic === 'hoteis').slice(0, 3);
    }
    else if (textLower.includes('show') || textLower.includes('teatro') || textLower.includes('musica') || textLower.includes('pedreira') || textLower.includes('guaira') || textLower.includes('paiol') || textLower.includes('evento')) {
      replyText = "Curitiba é um grande polo cultural! 🎭🎵 Confira os palcos principais:\n\n1. **Pedreira Paulo Leminski**: Maior palco a céu aberto das Américas para grandes shows internacionais.\n2. **Teatro Guaíra (Guairão)**: 2.173 lugares e sede da Orquestra Sinfônica.\n3. **Vale da Música**: Palco flutuante no lago da Ópera de Arame com Jazz e MPB diários.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'shows' || a.category === 'teatros' || a.category === 'eventos').slice(0, 3);
    }
    else if (textLower.includes('trem') || textLower.includes('serra') || textLower.includes('morretes') || textLower.includes('linha turismo') || textLower.includes('passeio') || textLower.includes('agencia') || textLower.includes('ilha do mel') || textLower.includes('vinho')) {
      replyText = "Os passeios mais procurados pelos viajantes em Curitiba e RMC! 🚂🏖️\n\n1. **Trem Serra Verde Express**: Viagem espetacular pela Mata Atlântica até Morretes com almoço de Barreado.\n2. **Linha Turismo (Double-Decker)**: Ônibus de 2 andares cobrindo 26 atrações com 5 reembarques.\n3. **Tour Caminho do Vinho (SJP)**: Visita guiada a adegas artesanais com degustação ilimitada.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'tours' || a.category === 'agencias' || a.id === 'trem-serra-verde').slice(0, 3);
    }
    else if (textLower.includes('restaurante') || textLower.includes('comida') || textLower.includes('comer') || textLower.includes('gastronomia') || textLower.includes('madalosso') || textLower.includes('barreado')) {
      replyText = "Prepare o paladar para a gastronomia paranaense! 🍝😋\n\n1. **Restaurante Família Madalosso**: O maior restaurante das Américas em Santa Felicidade com rodízio italiano farto.\n2. **Terrazza 40**: Restaurante panorâmico 360° no topo do edifício no Bigorrilho.\n3. **Mercado Municipal**: Pastel de Bacalhau e setor de orgânicos.";
      recommendations = ATTRACTIONS.filter(a => a.category === 'gastronomia' || a.id === 'restaurante-madalosso' || a.id === 'restaurante-terrazza40').slice(0, 3);
    }
    else {
      replyText = `Entendi sua dúvida sobre "${userText}"! 🌲✨ O portal Curitiba 360° reúne todas as informações oficiais sobre passeios, parques, feiras, gastronomia e hospedagem na capital e Região Metropolitana. Posso filtrar atrações específicas para você!`;
      recommendations = ATTRACTIONS.slice(0, 2);
    }

    return { replyText, recommendations };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      recommendations: []
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate AI thinking & response
    setTimeout(() => {
      const { replyText, recommendations } = generateAIResponse(query);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: replyText,
        recommendations
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 2500 }}>
      
      {/* Floating AI Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          height: '60px',
          padding: '0 20px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #00a896 0%, #2563eb 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px rgba(0, 168, 150, 0.45)',
          border: '2px solid rgba(255,255,255,0.3)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          outline: 'none'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Assistente Virtual Curitiba 360"
      >
        <div style={{ position: 'relative' }}>
          <Bot size={26} color="#ffffff" />
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid #ffffff' }} />
        </div>
        <span style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>
          {isOpen ? 'Fechar IA' : 'IA Curitiba 360'}
        </span>
        <Sparkles size={18} color="#f59e0b" />
      </button>

      {/* Popover AI Chat Window */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '76px',
          right: 0,
          width: '380px',
          maxWidth: 'calc(100vw - 32px)',
          height: '540px',
          maxHeight: 'calc(100vh - 120px)',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 45px rgba(15,23,42,0.25)',
          overflow: 'hidden',
          border: '1px solid #cbd5e1',
          display: 'flex',
          flexDirection: 'column'
        }} className="animate-fade-in">
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            color: '#ffffff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00a896 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,168,150,0.4)'
              }}>
                <Bot size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>Assistente Virtual Curitiba 360</h4>
                  <span style={{ backgroundColor: '#22c55e', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px' }}>ONLINE</span>
                </div>
                <p style={{ fontSize: '11px', color: '#cbd5e1', marginTop: '1px' }}>
                  IA Especialista em Curitiba & RMC
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div style={{
            flex: 1,
            padding: '16px',
            backgroundColor: '#f8fafc',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }} className="hide-scrollbar">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '100%'
                }}
              >
                {/* Message Bubble */}
                <div
                  style={{
                    backgroundColor: msg.sender === 'user' ? '#2563eb' : '#ffffff',
                    color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    border: msg.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                    maxWidth: '88%',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {msg.text}
                </div>

                {/* AI Attraction Recommendations inside chat */}
                {msg.recommendations && msg.recommendations.length > 0 && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '90%' }}>
                    <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      ★ Atrações Recomendadas pela IA:
                    </span>
                    {msg.recommendations.map(rec => (
                      <div
                        key={rec.id}
                        onClick={() => {
                          if (onSelectAttraction) onSelectAttraction(rec);
                        }}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #cbd5e1',
                          padding: '8px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = '#00a896'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                      >
                        <img src={rec.image} alt={rec.title} style={{ width: '42px', height: '42px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h5 style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {rec.title}
                          </h5>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                            <span style={{ color: '#2563eb', fontWeight: '700' }}>
                              {rec.isFree ? 'Grátis' : `R$ ${rec.price.toFixed(2).replace('.', ',')}`}
                            </span>
                            <span>•</span>
                            <span>★ {rec.rating}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} color="#00a896" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', padding: '10px 16px', borderRadius: '16px', border: '1px solid #e2e8f0', width: 'fit-content' }}>
                <RefreshCw size={14} color="#00a896" className="animate-spin" />
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Assistente Virtual Curitiba 360 está pensando...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Pills */}
          <div style={{ padding: '8px 12px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', overflowX: 'auto', display: 'flex', gap: '6px' }} className="hide-scrollbar">
            {QUICK_SUGGESTIONS.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug)}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#2563eb',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '9999px',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Footer Input Bar */}
          <div style={{ padding: '12px', backgroundColor: '#ffffff', borderTop: '1px solid #cbd5e1', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Pergunte algo sobre Curitiba para a IA..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              style={{
                flex: 1,
                height: '42px',
                padding: '0 16px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                fontSize: '13px',
                outline: 'none',
                backgroundColor: '#f8fafc'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00a896 0%, #2563eb 100%)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(0,168,150,0.3)',
                flexShrink: 0
              }}
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
