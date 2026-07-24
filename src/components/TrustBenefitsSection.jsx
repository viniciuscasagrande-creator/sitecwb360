import React from 'react';
import { Compass, ShieldCheck, RefreshCw } from 'lucide-react';

export default function TrustBenefitsSection() {
  return (
    <section style={{ maxWidth: '1280px', margin: '36px auto', padding: '0 16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        
        {/* Card 1 */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Compass size={24} />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
            Experiências que valem a pena a viagem
          </h3>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
            Descubra pontos turísticos icônicos de Curitiba e viva experiências autênticas como um verdadeiro curitibano.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#f0fdf4',
            color: '#16a34a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
            Reserve com confiança no Curitiba 360°
          </h3>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
            Avaliações 5★ verificadas, ingressos oficiais com garantia de vaga e tudo o que você precisa para decidir.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#fff7ed',
            color: '#ea580c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <RefreshCw size={24} />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
            Planos mudam e está tudo bem
          </h3>
          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
            Com cancelamentos gratuitos na maioria das atividades, suporte local em Curitiba e pagamentos facilitados no Pix.
          </p>
        </div>

      </div>
    </section>
  );
}
