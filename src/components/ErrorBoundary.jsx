import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 32px',
            maxWidth: '480px',
            boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
              Curitiba 360° - Recarregando a Página
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
              Detectamos uma atualização recente no portal. Clique no botão abaixo para reiniciar com a versão mais recente.
            </p>
            <button
              onClick={() => {
                window.location.reload(true);
              }}
              style={{
                backgroundColor: '#00a896',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '14px',
                padding: '12px 28px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,168,150,0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              🔄 Recarregar Versão Atualizada
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
