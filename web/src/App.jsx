import React, { useState, useEffect } from 'react';
import PlanesPage from './pages/PlanesPage.jsx';

const styles = {
  mobileContainer: {
    maxWidth: '480px',
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#f7f7f7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1a1a1a',
  },
  
  loginScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    background: 'white',
  },
  loginLogo: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  loginTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#6C3FE0',
  },
  loginSubtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '16px',
    width: '100%',
  },
  inputLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '20px',
  },

  appContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  
  header: {
    background: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#6C3FE0',
  },
  logoutBtnSmall: {
    background: 'transparent',
    border: '1px solid #e0e0e0',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer',
  },

  content: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    paddingBottom: '80px',
  },

  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '16px',
  },
  metricSmall: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  metricLabel: {
    fontSize: '12px',
    color: '#666',
  },

  card: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
  },

  qrContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    marginBottom: '16px',
  },
  qrPlaceholder: {
    width: '200px',
    height: '200px',
    background: '#f0f0f0',
    borderRadius: '12px',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
  },
  scanButton: {
    width: '100%',
    padding: '12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '8px',
  },
  generateQRButton: {
    width: '100%',
    padding: '12px',
    background: '#0F6E56',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  upgradeButton: {
    width: '100%',
    padding: '12px',
    background: '#F5A623',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
  },

  offerItem: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
  },
  offerTitle: {
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  offerDesc: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 8px',
    background: '#E1F5EE',
    color: '#0F6E56',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '600',
  },

  customerItem: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '8px',
  },
  customerName: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  customerInfo: {
    fontSize: '12px',
    color: '#666',
  },
  levelBadge: {
    display: 'inline-block',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: '600',
    marginTop: '4px',
  },
  levelBronze: {
    background: '#FFE8D6',
    color: '#8B4513',
  },
  levelSilver: {
    background: '#E8E8E8',
    color: '#666',
  },
  levelGold: {
    background: '#FFF8E6',
    color: '#F5A623',
  },

  reminderItem: {
    background: '#ede8fc',
    border: '1px solid #6C3FE0',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '12px',
  },
  reminderTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  reminderText: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  sendButton: {
    width: '100%',
    padding: '8px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '480px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0',
    background: 'white',
    borderTop: '1px solid #e0e0e0',
    padding: '0',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 0',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '11px',
    color: '#666',
    transition: 'all 0.2s',
  },
  navItemActive: {
    color: '#6C3FE0',
  },
  navIcon: {
    fontSize: '24px',
    marginBottom: '4px',
  },
};

export default function VuelveTiendaApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [qrGenerated, setQrGenerated] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showPlanes, setShowPlanes] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (storeName && password) {
      setIsLoggedIn(true);
    }
  };

  const handleGenerateQR = () => {
    const qrCode = `QR-${Date.now()}`;
    setQrGenerated(qrCode);
    setShowQRModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStoreName('');
    setPassword('');
  };

  // Mock data
  const metrics = {
    transacciones: 1243,
    clientes: 342,
    revenue: 8.6,
    promedio: 6950,
  };

  const offers = [
    { id: 1, titulo: '20% descuento en café', desc: 'Válido para cualquier bebida', descuento: 20 },
    { id: 2, titulo: 'Sándwich + café a $5.990', desc: 'Combo especial', descuento: 15 },
  ];

  const customers = [
    { id: 1, name: 'Juan Pérez', compras: 20, puntos: 2340, nivel: 'silver' },
    { id: 2, name: 'María García', compras: 15, puntos: 1890, nivel: 'silver' },
    { id: 3, name: 'Carlos López', compras: 8, puntos: 650, nivel: 'bronze' },
    { id: 4, name: 'Ana Martínez', compras: 3, puntos: 240, nivel: 'bronze' },
  ];

  const reminders = [
    { id: 1, customer: 'Juan Pérez', action: 'No ha comprado en 5 días', message: '¡Vuelve y gana 50 puntos extra!' },
    { id: 2, customer: 'María García', action: 'Está cerca del nivel Gold', message: 'Te faltan 800 puntos. ¡Tú puedes!' },
  ];

  if (!isLoggedIn) {
    return (
      <div style={styles.loginScreen}>
        <div style={styles.loginLogo}>🔄</div>
        <h1 style={styles.loginTitle}>Vuelve Tienda</h1>
        <p style={styles.loginSubtitle}>Gestiona tu negocio desde aquí</p>
        
        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '300px' }}>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Email de tienda</label>
            <input
              type="email"
              placeholder="cafe@vuelve.cl"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Contraseña</label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.loginButton}>
            Inicia sesión
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          Demo: usa cualquier email y contraseña
        </p>
      </div>
    );
  }

  // Si showPlanes es true, mostrar la página de planes
  if (showPlanes) {
    return <PlanesPage onBack={() => setShowPlanes(false)} />;
  }

  return (
    <div style={styles.mobileContainer}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Vuelve Tienda</h1>
        <button style={styles.logoutBtnSmall} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              📊 Resumen del Día
            </h2>

            <div style={styles.metricsGrid}>
              <div style={styles.metricSmall}>
                <div style={styles.metricValue}>{metrics.transacciones}</div>
                <div style={styles.metricLabel}>Transacciones</div>
              </div>
              <div style={styles.metricSmall}>
                <div style={styles.metricValue}>{metrics.clientes}</div>
                <div style={styles.metricLabel}>Clientes</div>
              </div>
              <div style={styles.metricSmall}>
                <div style={styles.metricValue}>${metrics.revenue}M</div>
                <div style={styles.metricLabel}>Revenue</div>
              </div>
              <div style={styles.metricSmall}>
                <div style={styles.metricValue}>${(metrics.promedio / 1000).toFixed(1)}K</div>
                <div style={styles.metricLabel}>Promedio</div>
              </div>
            </div>

            <div style={styles.card}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                ⚡ Acciones Rápidas
              </h3>
              <button style={{ ...styles.scanButton, marginBottom: '8px' }}>
                📱 Validar Compra
              </button>
              <button style={styles.generateQRButton} onClick={handleGenerateQR}>
                🎁 Crear Oferta
              </button>
              <button style={styles.upgradeButton} onClick={() => setShowPlanes(true)}>
                🚀 Mejorar Plan
              </button>
            </div>
          </>
        )}

        {/* SCANNER QR */}
        {activeTab === 'scanner' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              📸 Escanear QR
            </h2>

            {showQRModal ? (
              <div style={styles.qrContainer}>
                <h3 style={{ margin: '0 0 12px 0' }}>QR Generado</h3>
                <div style={styles.qrPlaceholder}>📦</div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
                  Código: {qrGenerated}
                </p>
                <button
                  style={{
                    ...styles.scanButton,
                    background: '#0F6E56',
                  }}
                  onClick={() => setShowQRModal(false)}
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <div style={styles.qrContainer}>
                  <div style={styles.qrPlaceholder}>📷</div>
                  <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px' }}>
                    Apunta la cámara al QR del cliente
                  </p>
                  <button style={styles.scanButton}>Activar Cámara</button>
                </div>

                <div style={styles.card}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                    Última Validación
                  </h3>
                  <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                    Cliente: Juan Pérez
                  </p>
                  <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>
                    Monto: $8.500
                  </p>
                  <p style={{ fontSize: '12px', color: '#0F6E56', fontWeight: '600' }}>
                    ✅ 85 puntos otorgados
                  </p>
                </div>
              </>
            )}
          </>
        )}

        {/* OFERTAS */}
        {activeTab === 'ofertas' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              🎁 Mis Ofertas
            </h2>
            {offers.map((offer) => (
              <div key={offer.id} style={styles.offerItem}>
                <h3 style={styles.offerTitle}>{offer.titulo}</h3>
                <p style={styles.offerDesc}>{offer.desc}</p>
                <span style={styles.badge}>{offer.descuento}% OFF</span>
              </div>
            ))}
          </>
        )}

        {/* CLIENTES */}
        {activeTab === 'clientes' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              👥 Mis Clientes ({customers.length})
            </h2>
            {customers.map((customer) => (
              <div key={customer.id} style={styles.customerItem}>
                <h3 style={styles.customerName}>{customer.name}</h3>
                <p style={styles.customerInfo}>
                  {customer.compras} compras • {customer.puntos} puntos
                </p>
                <span
                  style={{
                    ...styles.levelBadge,
                    ...(customer.nivel === 'bronze'
                      ? styles.levelBronze
                      : styles.levelSilver),
                  }}
                >
                  {customer.nivel.toUpperCase()}
                </span>
              </div>
            ))}
          </>
        )}

        {/* RECORDATORIOS */}
        {activeTab === 'recordatorios' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              🔔 Recordatorios Inteligentes
            </h2>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
              Vuelve analiza a tus clientes y te sugiere cuándo contactarlos
            </p>
            {reminders.map((reminder) => (
              <div key={reminder.id} style={styles.reminderItem}>
                <h3 style={styles.reminderTitle}>{reminder.customer}</h3>
                <p style={styles.reminderText}>{reminder.action}</p>
                <p style={{ fontSize: '12px', color: '#6C3FE0', marginBottom: '8px', fontWeight: '600' }}>
                  💡 {reminder.message}
                </p>
                <button style={styles.sendButton}>
                  Enviar Notificación
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'dashboard' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('dashboard')}
        >
          <div style={styles.navIcon}>📊</div>
          <span>Dashboard</span>
        </button>

        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'scanner' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('scanner')}
        >
          <div style={styles.navIcon}>📸</div>
          <span>Scanner</span>
        </button>

        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'ofertas' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('ofertas')}
        >
          <div style={styles.navIcon}>🎁</div>
          <span>Ofertas</span>
        </button>

        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'clientes' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('clientes')}
        >
          <div style={styles.navIcon}>👥</div>
          <span>Clientes</span>
        </button>

        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'recordatorios' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('recordatorios')}
        >
          <div style={styles.navIcon}>🔔</div>
          <span>Recordatorios</span>
        </button>
      </div>
    </div>
  );
}