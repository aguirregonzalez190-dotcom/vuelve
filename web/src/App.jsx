import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: '#f7f7f7',
    color: '#1a1a1a',
  },
  header: {
    background: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#6C3FE0',
    margin: '0 0 4px 0',
  },
  storeName: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  headerBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  planBadge: {
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    background: '#ede8fc',
    color: '#6C3FE0',
  },
  logoutBtn: {
    background: 'transparent',
    border: '1px solid #e0e0e0',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  nav: {
    background: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '0 24px',
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
  },
  navItem: {
    background: 'none',
    border: 'none',
    padding: '16px 0',
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },
  navItemActive: {
    color: '#6C3FE0',
    borderBottomColor: '#6C3FE0',
  },
  content: {
    flex: 1,
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '24px',
    color: '#1a1a1a',
    fontWeight: '600',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  metricCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  metricValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '8px',
  },
  metricLabel: {
    fontSize: '14px',
    color: '#666',
    fontWeight: '500',
    marginBottom: '8px',
  },
  metricTrend: {
    fontSize: '12px',
    color: '#0F6E56',
  },
  offerForm: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '32px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  formLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  formInput: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  formTextarea: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    minHeight: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  buttonPrimary: {
    background: '#6C3FE0',
    color: 'white',
  },
  buttonSmall: {
    padding: '6px 12px',
    fontSize: '12px',
  },
  offersList: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '24px',
  },
  offerItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  offerDesc: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '8px',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    background: '#E1F5EE',
    color: '#0F6E56',
    marginRight: '8px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '32px',
    color: '#666',
    fontSize: '14px',
  },
  customersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  },
  customerCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
  },
  customerName: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  customerInfo: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
  },
  levelBadge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
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
  footer: {
    background: 'white',
    borderTop: '1px solid #e0e0e0',
    padding: '24px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#666',
    marginTop: 'auto',
  },
};

export default function StoreDashboard() {
  const [activeTab, setActiveTab] = useState('metrics');
  const [offers, setOffers] = useState([
    {
      id: '1',
      titulo: '20% descuento en café',
      descripcion: 'Válido para cualquier bebida',
      descuento: 20,
    },
    {
      id: '2',
      titulo: 'Sándwich + café a $5.990',
      descripcion: 'Combo especial',
      descuento: 15,
    },
  ]);
  const [newOffer, setNewOffer] = useState({
    titulo: '',
    descripcion: '',
    descuento: '',
  });

  const metrics = {
    totalTransacciones: 1243,
    clientesUnicos: 342,
    revenueTotal: 8650000,
    promedioTransaccion: 6950,
    tasaRetorno: '27.4%',
  };

  const customers = [
    { id: '1', name: 'Juan Pérez', compras: 20, puntos: 2340, nivel: 'silver' },
    { id: '2', name: 'María García', compras: 15, puntos: 1890, nivel: 'silver' },
    { id: '3', name: 'Carlos López', compras: 8, puntos: 650, nivel: 'bronze' },
    { id: '4', name: 'Ana Martínez', compras: 3, puntos: 240, nivel: 'bronze' },
  ];

  const handleCreateOffer = (e) => {
    e.preventDefault();
    if (!newOffer.titulo || !newOffer.descuento) {
      alert('Completa título y descuento');
      return;
    }
    const offer = {
      id: String(offers.length + 1),
      ...newOffer,
    };
    setOffers([offer, ...offers]);
    setNewOffer({ titulo: '', descripcion: '', descuento: '' });
    alert('Oferta creada exitosamente');
  };

  const handleDeleteOffer = (id) => {
    setOffers(offers.filter((o) => o.id !== id));
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Vuelve Dashboard</h1>
          <p style={styles.storeName}>Café Vuelve</p>
        </div>
        <div style={styles.headerBadge}>
          <span style={styles.planBadge}>Plan PRO</span>
          <button style={styles.logoutBtn}>Cerrar sesión</button>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'metrics' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('metrics')}
        >
          📊 Métricas
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'offers' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('offers')}
        >
          🎁 Ofertas
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'customers' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('customers')}
        >
          👥 Clientes
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeTab === 'settings' ? styles.navItemActive : {}),
          }}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Configuración
        </button>
      </nav>

      {/* Content */}
      <main style={styles.content}>
        {/* MÉTRICAS */}
        {activeTab === 'metrics' && (
          <section>
            <h2 style={styles.sectionTitle}>Resumen de Desempeño</h2>
            <div style={styles.metricsGrid}>
              <div style={styles.metricCard}>
                <div style={styles.metricValue}>{metrics.totalTransacciones}</div>
                <div style={styles.metricLabel}>Transacciones</div>
                <div style={styles.metricTrend}>+12% vs último mes</div>
              </div>

              <div style={styles.metricCard}>
                <div style={styles.metricValue}>{metrics.clientesUnicos}</div>
                <div style={styles.metricLabel}>Clientes Únicos</div>
                <div style={styles.metricTrend}>+8% vs último mes</div>
              </div>

              <div style={styles.metricCard}>
                <div style={styles.metricValue}>
                  ${(metrics.revenueTotal / 1000000).toFixed(1)}M
                </div>
                <div style={styles.metricLabel}>Revenue Total</div>
                <div style={styles.metricTrend}>+15% vs último mes</div>
              </div>

              <div style={styles.metricCard}>
                <div style={styles.metricValue}>
                  ${metrics.promedioTransaccion.toLocaleString()}
                </div>
                <div style={styles.metricLabel}>Promedio por Compra</div>
                <div style={styles.metricTrend}>+3% vs último mes</div>
              </div>

              <div style={styles.metricCard}>
                <div style={styles.metricValue}>{metrics.tasaRetorno}</div>
                <div style={styles.metricLabel}>Tasa de Retorno</div>
                <div style={styles.metricTrend}>Clientes que vuelven</div>
              </div>
            </div>
          </section>
        )}

        {/* OFERTAS */}
        {activeTab === 'offers' && (
          <section>
            <h2 style={styles.sectionTitle}>Gestionar Ofertas</h2>

            <div style={styles.offerForm}>
              <h3 style={{ marginTop: 0, fontSize: '16px', fontWeight: '600' }}>
                Crear Nueva Oferta
              </h3>
              <form onSubmit={handleCreateOffer}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Título de la oferta</label>
                  <input
                    type="text"
                    placeholder="Ej: 20% descuento en café"
                    value={newOffer.titulo}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, titulo: e.target.value })
                    }
                    style={styles.formInput}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Descripción (opcional)</label>
                  <textarea
                    placeholder="Detalles de la oferta..."
                    value={newOffer.descripcion}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, descripcion: e.target.value })
                    }
                    style={styles.formTextarea}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Descuento (%)</label>
                  <input
                    type="number"
                    placeholder="Ej: 20"
                    min="1"
                    max="100"
                    value={newOffer.descuento}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, descuento: e.target.value })
                    }
                    style={styles.formInput}
                  />
                </div>

                <button
                  type="submit"
                  style={{ ...styles.button, ...styles.buttonPrimary }}
                >
                  Crear Oferta
                </button>
              </form>
            </div>

            <div style={styles.offersList}>
              <h3 style={{ marginTop: 0, fontSize: '16px', fontWeight: '600' }}>
                Ofertas Activas
              </h3>
              {offers.length === 0 ? (
                <p style={styles.emptyState}>
                  No tienes ofertas aún. Crea una para empezar a fidelizar.
                </p>
              ) : (
                offers.map((offer) => (
                  <div key={offer.id} style={styles.offerItem}>
                    <div style={styles.offerContent}>
                      <h4 style={styles.offerTitle}>{offer.titulo}</h4>
                      {offer.descripcion && (
                        <p style={styles.offerDesc}>{offer.descripcion}</p>
                      )}
                      <div>
                        <span style={styles.badge}>{offer.descuento}% OFF</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDeleteOffer(offer.id)}
                        style={{
                          ...styles.button,
                          ...styles.buttonSmall,
                          background: '#E24B4A',
                          color: 'white',
                          marginLeft: '8px',
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {/* CLIENTES */}
        {activeTab === 'customers' && (
          <section>
            <h2 style={styles.sectionTitle}>Tus Clientes</h2>
            <p style={{ color: '#666', marginBottom: '16px' }}>
              📱 Total de clientes activos: {customers.length}
            </p>
            <div style={styles.customersGrid}>
              {customers.map((customer) => (
                <div key={customer.id} style={styles.customerCard}>
                  <h4 style={styles.customerName}>{customer.name}</h4>
                  <p style={styles.customerInfo}>
                    {customer.compras} compras • {customer.puntos} puntos
                  </p>
                  <span
                    style={{
                      ...styles.levelBadge,
                      ...(customer.nivel === 'bronze'
                        ? styles.levelBronze
                        : customer.nivel === 'silver'
                        ? styles.levelSilver
                        : styles.levelGold),
                    }}
                  >
                    {customer.nivel}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONFIGURACIÓN */}
        {activeTab === 'settings' && (
          <section>
            <h2 style={styles.sectionTitle}>Configuración de Tienda</h2>
            <div style={styles.offerForm}>
              <h3 style={{ marginTop: 0 }}>Información Básica</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ padding: '16px', background: '#f7f7f7', borderRadius: '8px' }}>
                  <label style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>
                    Nombre
                  </label>
                  <p style={{ margin: '8px 0 0 0', fontWeight: '500' }}>Café Vuelve</p>
                </div>
                <div style={{ padding: '16px', background: '#f7f7f7', borderRadius: '8px' }}>
                  <label style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>
                    Categoría
                  </label>
                  <p style={{ margin: '8px 0 0 0', fontWeight: '500' }}>Gastronomía</p>
                </div>
                <div style={{ padding: '16px', background: '#f7f7f7', borderRadius: '8px' }}>
                  <label style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>
                    Email
                  </label>
                  <p style={{ margin: '8px 0 0 0', fontWeight: '500' }}>
                    info@cafevuelve.cl
                  </p>
                </div>
              </div>
              <button style={{ ...styles.button, ...styles.buttonPrimary }}>
                Editar información
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ margin: 0 }}>
          © 2025 Vuelve. Plataforma de fidelización para comercios independientes.
        </p>
      </footer>
    </div>
  );
}
