import React, { useState } from 'react';

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1a1a1a',
    background: '#ffffff',
  },
  
  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'white',
    padding: '16px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#6C3FE0',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: '14px',
    color: '#666',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  ctaButton: {
    padding: '10px 24px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  // Hero
  hero: {
    background: 'linear-gradient(135deg, #6C3FE0 0%, #4a2c8f 100%)',
    color: 'white',
    padding: '120px 40px 80px',
    textAlign: 'center',
    marginTop: '60px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '20px',
    opacity: 0.95,
    marginBottom: '32px',
    maxWidth: '600px',
    margin: '0 auto 32px',
  },
  heroCTA: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'white',
    color: '#6C3FE0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginRight: '16px',
  },
  heroCTASecondary: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  // Section
  section: {
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '48px',
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '12px',
  },

  // Features Grid
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  featureCard: {
    padding: '32px',
    background: '#f7f7f7',
    borderRadius: '12px',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  featureDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
  },

  // Plans
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
  },
  planCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '32px',
  },
  planCardHighlight: {
    background: '#ede8fc',
    border: '2px solid #6C3FE0',
  },
  planName: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  planPrice: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  planPeriod: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '24px',
  },
  planFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '24px',
  },
  planFeature: {
    fontSize: '13px',
    color: '#666',
    padding: '8px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  planFeatureLast: {
    borderBottom: 'none',
  },
  planButton: {
    width: '100%',
    padding: '12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  // Stats
  stats: {
    background: '#f7f7f7',
    padding: '80px 40px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
  },

  // CTA Section
  ctaSection: {
    background: 'linear-gradient(135deg, #6C3FE0 0%, #4a2c8f 100%)',
    color: 'white',
    padding: '80px 40px',
    textAlign: 'center',
  },
  ctaSectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  ctaSectionSubtitle: {
    fontSize: '16px',
    opacity: 0.95,
    marginBottom: '32px',
  },
  ctaSectionButton: {
    padding: '14px 40px',
    background: 'white',
    color: '#6C3FE0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  // Footer
  footer: {
    background: '#1a1a1a',
    color: 'white',
    padding: '40px',
    textAlign: 'center',
    fontSize: '12px',
  },

  // Mobile responsive
  '@media (max-width: 768px)': {
    featuresGrid: {
      gridTemplateColumns: '1fr',
    },
    plansGrid: {
      gridTemplateColumns: '1fr',
    },
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    navLinks: {
      display: 'none',
    },
  },
};

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias! Te contactaremos en ${email}`);
    setEmail('');
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>🔄 Vuelve</div>
        <ul style={styles.navLinks}>
          <li><a href="#features" style={styles.navLink}>Features</a></li>
          <li><a href="#planes" style={styles.navLink}>Planes</a></li>
          <li><a href="#stats" style={styles.navLink}>Estadísticas</a></li>
          <li><a href="#contact" style={styles.navLink}>Contacto</a></li>
        </ul>
        <button style={styles.ctaButton}>Iniciar Sesión</button>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Fidelización que Funciona</h1>
        <p style={styles.heroSubtitle}>
          Plataforma completa para que tus clientes acumulen puntos y vuelvan más seguido
        </p>
        <button style={styles.heroCTA}>Comenzar Ahora</button>
        <button style={styles.heroCTASecondary}>Ver Demo</button>
      </section>

      {/* Features */}
      <section id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Por qué Vuelve?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📱</div>
            <h3 style={styles.featureTitle}>App para Usuarios</h3>
            <p style={styles.featureDescription}>
              Los clientes acumulan puntos, ven ofertas y generan QR desde su celular
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Dashboard Tienda</h3>
            <p style={styles.featureDescription}>
              Análisis real-time de clientes, ventas, recordatorios inteligentes
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>IA Inteligente</h3>
            <p style={styles.featureDescription}>
              Recordatorios automáticos, A/B testing, predicción de churn
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎯</div>
            <h3 style={styles.featureTitle}>Puntos Ilimitados</h3>
            <p style={styles.featureDescription}>
              Sistema flexible: 1 punto = $100 gastado, sin límites
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>💰</div>
            <h3 style={styles.featureTitle}>Para Todos</h3>
            <p style={styles.featureDescription}>
              Desde tiendas pequeñas hasta cadenas. Planes adaptados a tu tamaño
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Setup en Minutos</h3>
            <p style={styles.featureDescription}>
              Integración simple, sin código. Empieza hoy mismo
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planes" style={{ ...styles.section, background: '#f7f7f7' }}>
        <h2 style={styles.sectionTitle}>Planes para Tiendas</h2>
        <div style={styles.plansGrid}>
          <div style={styles.planCard}>
            <h3 style={styles.planName}>Gratis</h3>
            <div style={styles.planPrice}>$0</div>
            <div style={styles.planPeriod}>/mes</div>
            <ul style={styles.planFeatures}>
              <li style={styles.planFeature}>✓ 2 ofertas activas</li>
              <li style={styles.planFeature}>✓ 100 clientes máximo</li>
              <li style={styles.planFeature}>✓ Dashboard básico</li>
              <li style={styles.planFeature}>✗ Recordatorios IA</li>
            </ul>
            <button style={styles.planButton}>Empezar Gratis</button>
          </div>

          <div style={{ ...styles.planCard, ...styles.planCardHighlight }}>
            <h3 style={styles.planName}>Pro ⭐</h3>
            <div style={styles.planPrice}>$29.990</div>
            <div style={styles.planPeriod}>/mes</div>
            <ul style={styles.planFeatures}>
              <li style={styles.planFeature}>✓ Ofertas ilimitadas</li>
              <li style={styles.planFeature}>✓ Clientes ilimitados</li>
              <li style={styles.planFeature}>✓ Recordatorios IA</li>
              <li style={styles.planFeature}>✓ Análisis avanzado</li>
            </ul>
            <button style={styles.planButton}>Comenzar Pro</button>
          </div>

          <div style={styles.planCard}>
            <h3 style={styles.planName}>Plus (Usuario)</h3>
            <div style={styles.planPrice}>$4.990</div>
            <div style={styles.planPeriod}>/mes</div>
            <ul style={styles.planFeatures}>
              <li style={styles.planFeature}>✓ Puntos 2x</li>
              <li style={styles.planFeature}>✓ Canjes ilimitados</li>
              <li style={styles.planFeature}>✓ Desafíos semanales</li>
              <li style={styles.planFeature}>✓ Referral program</li>
            </ul>
            <button style={styles.planButton}>Suscribirse</button>
          </div>

          <div style={{ ...styles.planCard, ...styles.planCardHighlight }}>
            <h3 style={styles.planName}>Premium 🚀</h3>
            <div style={styles.planPrice}>$59.990</div>
            <div style={styles.planPeriod}>/mes</div>
            <ul style={styles.planFeatures}>
              <li style={styles.planFeature}>✓ Todo lo de Pro +</li>
              <li style={styles.planFeature}>✓ A/B Testing</li>
              <li style={styles.planFeature}>✓ POS Integración</li>
              <li style={styles.planFeature}>✓ Banner Destacado</li>
            </ul>
            <button style={styles.planButton}>Comenzar Premium</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" style={styles.stats}>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statValue}>342</div>
            <div style={styles.statLabel}>Tiendas Activas</div>
          </div>
          <div>
            <div style={styles.statValue}>8K+</div>
            <div style={styles.statLabel}>Usuarios</div>
          </div>
          <div>
            <div style={styles.statValue}>$12.9M</div>
            <div style={styles.statLabel}>Volumen Mes 12</div>
          </div>
          <div>
            <div style={styles.statValue}>98%</div>
            <div style={styles.statLabel}>Satisfacción</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={styles.ctaSection}>
        <h2 style={styles.ctaSectionTitle}>¿Listo para Crecer?</h2>
        <p style={styles.ctaSectionSubtitle}>
          Únete a 342 tiendas que ya usan Vuelve
        </p>
        <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px',
              width: '300px',
            }}
          />
          <button type="submit" style={styles.ctaSectionButton}>
            Comenzar Ahora
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Vuelve. Todos los derechos reservados. | Hecho en Chile 🇨🇱</p>
      </footer>
    </div>
  );
}
