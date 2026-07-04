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
  formGroup: {
    marginBottom: '16px',
    width: '100%',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
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
  button: {
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
  toggleText: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#666',
    textAlign: 'center',
  },
  toggleLink: {
    color: '#6C3FE0',
    cursor: 'pointer',
    fontWeight: '600',
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
  profileBtn: {
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
  pointsCard: {
    background: 'linear-gradient(135deg, #6C3FE0 0%, #4a2c8f 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  pointsValue: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  pointsLabel: {
    fontSize: '14px',
    opacity: 0.9,
    marginBottom: '12px',
  },
  levelBadge: {
    display: 'inline-block',
    padding: '6px 12px',
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  levelProgress: {
    marginTop: '16px',
    background: 'rgba(255,255,255,0.2)',
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  levelProgressBar: {
    height: '100%',
    background: 'white',
    borderRadius: '4px',
  },
  card: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
  },
  storeCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
  },
  storeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '8px',
  },
  storeName: {
    fontSize: '16px',
    fontWeight: '600',
  },
  storeCategory: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  offerBadge: {
    display: 'inline-block',
    padding: '4px 8px',
    background: '#E1F5EE',
    color: '#0F6E56',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '600',
  },
  offerCard: {
    background: '#ede8fc',
    border: '1px solid #6C3FE0',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '12px',
  },
  offerTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  offerDesc: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  qrContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
  },
  qrPlaceholder: {
    width: '220px',
    height: '220px',
    background: '#f0f0f0',
    borderRadius: '12px',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '64px',
  },
  qrCode: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '12px',
    wordBreak: 'break-all',
  },
  timer: {
    fontSize: '14px',
    color: '#E24B4A',
    fontWeight: '600',
    marginBottom: '12px',
  },
  generateBtn: {
    width: '100%',
    padding: '12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  transactionItem: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionLeft: {
    flex: 1,
  },
  transactionStore: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  transactionDate: {
    fontSize: '12px',
    color: '#666',
  },
  transactionPoints: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#6C3FE0',
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '480px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
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
  },
  navItemActive: {
    color: '#6C3FE0',
  },
  navIcon: {
    fontSize: '24px',
    marginBottom: '4px',
  },
  upgradeButton: {
    width: '100%',
    padding: '12px',
    background: '#F5A623',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '12px',
  },
};

export default function VuelveUserApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [qrTimer, setQrTimer] = useState(null);
  const [currentQR, setCurrentQR] = useState(null);
  const [showPlanes, setShowPlanes] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password && name) {
      setIsLoggedIn(true);
      setIsRegister(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleGenerateQR = () => {
    const qr = `QR-USER-${Date.now()}`;
    setCurrentQR(qr);
    setQrTimer(120);
    const interval = setInterval(() => {
      setQrTimer((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setCurrentQR(null);
          return null;
        }
        return t - 1;
      });
    }, 1000);
  };

  const user = {
    name: 'Juan Pérez',
    puntos: 2340,
    nivel: 'silver',
    nextLevel: 3000,
  };

  const stores = [
    { id: 1, name: 'Café Vuelve', category: 'Gastronomía', offers: 2, distance: '0.5 km' },
    { id: 2, name: 'Pet Shop Vuelve', category: 'Mascotas', offers: 1, distance: '1.2 km' },
    { id: 3, name: 'Almacén Don Juanito', category: 'Almacén', offers: 3, distance: '0.8 km' },
  ];

  const offers = [
    { id: 1, store: 'Café Vuelve', title: '20% descuento en café', discount: 20 },
    { id: 2, store: 'Almacén Don Juanito', title: 'Compra 2 llevas 3', discount: 33 },
  ];

  const transactions = [
    { id: 1, store: 'Café Vuelve', date: 'Hoy 14:30', points: 85 },
    { id: 2, store: 'Almacén Don Juanito', date: 'Ayer 10:15', points: 120 },
    { id: 3, store: 'Café Vuelve', date: 'Hace 2 días', points: 65 },
  ];

  if (!isLoggedIn) {
    return (
      <div style={styles.loginScreen}>
        <div style={styles.loginLogo}>💳</div>
        <h1 style={styles.loginTitle}>Vuelve</h1>
        <p style={styles.loginSubtitle}>Gana puntos en tus tiendas favoritas</p>

        <form onSubmit={isRegister ? handleRegister : handleLogin} style={{ width: '100%', maxWidth: '300px' }}>
          {isRegister && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre</label>
              <input
                type="text"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            {isRegister ? 'Crear cuenta' : 'Inicia sesión'}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <span style={styles.toggleLink} onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Inicia sesión' : 'Regístrate'}
          </span>
        </p>
      </div>
    );
  }

  if (showPlanes) {
    return <PlanesPage onClose={() => setShowPlanes(false)} />;
  }

  return (
    <div style={styles.mobileContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Vuelve</h1>
        <button style={styles.profileBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div style={styles.content}>
        {activeTab === 'home' && (
          <>
            <div style={styles.pointsCard}>
              <div style={styles.pointsValue}>{user.puntos}</div>
              <div style={styles.pointsLabel}>Puntos Acumulados</div>
              <div style={styles.levelBadge}>{user.nivel.toUpperCase()}</div>
              <div style={styles.levelProgress}>
                <div style={{
                  ...styles.levelProgressBar,
                  width: `${(user.puntos / user.nextLevel) * 100}%`,
                }}></div>
              </div>
              <div style={{ fontSize: '11px', marginTop: '8px', opacity: 0.9 }}>
                {user.nextLevel - user.puntos} puntos para {user.nivel === 'silver' ? 'GOLD' : 'SILVER'}
              </div>

              <button style={styles.upgradeButton} onClick={() => setShowPlanes(true)}>
                ⭐ Mejorar a Plus
              </button>
            </div>

            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              🏪 Tiendas Cercanas
            </h2>
            {stores.map((store) => (
              <div key={store.id} style={styles.storeCard}>
                <div style={styles.storeHeader}>
                  <div>
                    <div style={styles.storeName}>{store.name}</div>
                    <div style={styles.storeCategory}>{store.category}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{store.distance}</div>
                </div>
                <span style={styles.offerBadge}>{store.offers} ofertas</span>
              </div>
            ))}
          </>
        )}

        {activeTab === 'ofertas' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              🎁 Ofertas Disponibles
            </h2>
            {offers.map((offer) => (
              <div key={offer.id} style={styles.offerCard}>
                <div style={styles.offerTitle}>{offer.store}</div>
                <div style={styles.offerDesc}>{offer.title}</div>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 8px',
                  background: 'rgba(108, 63, 224, 0.2)',
                  color: '#6C3FE0',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '600',
                }}>
                  {offer.discount}% OFF
                </span>
              </div>
            ))}
          </>
        )}

        {activeTab === 'qr' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              📱 Tu QR de Pago
            </h2>
            {currentQR ? (
              <div style={styles.qrContainer}>
                <div style={styles.qrPlaceholder}>📦</div>
                <div style={styles.qrCode}>{currentQR}</div>
                <div style={styles.timer}>Expira en: {qrTimer}s</div>
                <button
                  style={{ ...styles.generateBtn, background: '#0F6E56' }}
                  onClick={() => setCurrentQR(null)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <>
                <div style={styles.qrContainer}>
                  <div style={styles.qrPlaceholder}>📷</div>
                  <p style={{ fontSize: '12px', color: '#666', margin: '16px 0' }}>
                    Genera un QR único para cada compra. Válido por 2 minutos
                  </p>
                  <button style={styles.generateBtn} onClick={handleGenerateQR}>
                    Generar QR
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {activeTab === 'historial' && (
          <>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              📜 Mi Historial
            </h2>
            {transactions.map((t) => (
              <div key={t.id} style={styles.transactionItem}>
                <div style={styles.transactionLeft}>
                  <div style={styles.transactionStore}>{t.store}</div>
                  <div style={styles.transactionDate}>{t.date}</div>
                </div>
                <div style={styles.transactionPoints}>+{t.points}</div>
              </div>
            ))}
          </>
        )}
      </div>

      <div style={styles.bottomNav}>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'home' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('home')}
        >
          <div style={styles.navIcon}>🏠</div>
          <span>Home</span>
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
            ...(activeTab === 'qr' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('qr')}
        >
          <div style={styles.navIcon}>📱</div>
          <span>QR</span>
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'historial' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('historial')}
        >
          <div style={styles.navIcon}>📜</div>
          <span>Historial</span>
        </button>
      </div>
    </div>
  );
}
