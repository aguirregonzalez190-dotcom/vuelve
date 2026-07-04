import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#f7f7f7',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
  backButton: {
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
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  pageSubtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '24px',
  },
  
  promoBanner: {
    background: 'linear-gradient(135deg, #6C3FE0 0%, #4a2c8f 100%)',
    color: 'white',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
    textAlign: 'center',
  },
  promoBannerTitle: {
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  promoBannerText: {
    fontSize: '12px',
    opacity: 0.95,
    marginBottom: '8px',
  },
  promoBadge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.2)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '600',
  },
  
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    marginBottom: '24px',
  },
  planCard: {
    background: 'white',
    border: '2px solid #e0e0e0',
    borderRadius: '12px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#6C3FE0',
    background: '#ede8fc',
    boxShadow: '0 4px 12px rgba(108, 63, 224, 0.15)',
  },
  planBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: '#F5A623',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '600',
  },
  planName: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  planPrice: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  planPriceSmall: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '16px',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    fontSize: '12px',
    color: '#666',
    padding: '6px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  featureItemLast: {
    borderBottom: 'none',
  },
  featureCheck: {
    color: '#0F6E56',
    fontWeight: '600',
    marginRight: '6px',
  },
  featureX: {
    color: '#999',
    marginRight: '6px',
  },
  
  promoSection: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  },
  promoTitle: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  promoInputGroup: {
    display: 'flex',
    gap: '8px',
  },
  promoInput: {
    flex: 1,
    padding: '10px 12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '12px',
  },
  promoButton: {
    padding: '10px 12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  promoSuccess: {
    background: '#E1F5EE',
    color: '#0F6E56',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    marginTop: '8px',
    fontWeight: '600',
  },
  
  priceSummary: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    padding: '8px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  summaryRowLast: {
    borderBottom: 'none',
  },
  summaryLabel: {
    color: '#666',
  },
  summaryValue: {
    fontWeight: '600',
    color: '#1a1a1a',
  },
  summaryDiscount: {
    color: '#0F6E56',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '700',
    color: '#6C3FE0',
    paddingTop: '12px',
    marginTop: '12px',
    borderTop: '2px solid #6C3FE0',
  },
  
  subscribeButton: {
    width: '100%',
    padding: '14px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  cancelButton: {
    width: '100%',
    padding: '12px',
    background: 'transparent',
    color: '#6C3FE0',
    border: '1px solid #6C3FE0',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  
  comparisonSection: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  },
  comparisonTitle: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  comparisonTable: {
    fontSize: '12px',
    width: '100%',
  },
  footer: {
    padding: '16px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#999',
  },
};

export default function PlanesPage({ onBack }) {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(null);
  const [discount, setDiscount] = useState(0);

  const plans = {
    gratis: {
      name: 'Gratis',
      price: 0,
      billing: '',
      description: 'Perfecto para empezar',
      features: [
        { name: '2 ofertas activas', included: true },
        { name: '100 clientes máximo', included: true },
        { name: 'Dashboard básico', included: true },
        { name: 'Recordatorios IA', included: false },
        { name: 'Notificaciones push', included: false },
        { name: 'Análisis avanzado', included: false },
        { name: 'A/B Testing', included: false },
        { name: 'Integración POS', included: false },
      ],
    },
    pro: {
      name: 'Pro',
      price: 29990,
      billing: '/mes',
      description: 'Lo más popular',
      badge: '¡MÁS POPULAR!',
      features: [
        { name: 'Ofertas ilimitadas', included: true },
        { name: 'Clientes ilimitados', included: true },
        { name: 'Dashboard avanzado', included: true },
        { name: 'Recordatorios IA', included: true },
        { name: 'Notificaciones push', included: true },
        { name: 'Análisis avanzado', included: true },
        { name: 'A/B Testing', included: false },
        { name: 'Integración POS', included: false },
      ],
    },
    premium: {
      name: 'Premium',
      price: 59990,
      billing: '/mes',
      description: 'Todo incluido',
      badge: 'PARA EXPERTOS',
      features: [
        { name: 'Ofertas ilimitadas', included: true },
        { name: 'Clientes ilimitados', included: true },
        { name: 'Dashboard avanzado', included: true },
        { name: 'Recordatorios IA', included: true },
        { name: 'Notificaciones push ilimitado', included: true },
        { name: 'Análisis avanzado', included: true },
        { name: 'A/B Testing automático', included: true },
        { name: 'Integración POS', included: true },
      ],
    },
  };

  const promoCodes = {
    'LAUNCH50': { discount: 50, valid: true, message: '50% off lanzamiento' },
    'BLACK40': { discount: 40, valid: true, message: '40% off Black Friday' },
    'REFERRAL': { discount: 100, valid: true, message: '1 mes gratis' },
    'UPGRADE50': { discount: 50, valid: true, message: '50% off upgrade' },
  };

  const handlePromoValidate = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code]) {
      setPromoApplied(code);
      setDiscount(promoCodes[code].discount);
    } else {
      alert('Código no válido');
      setPromoApplied(null);
      setDiscount(0);
    }
  };

  const calculatePrice = () => {
    if (selectedPlan === 'gratis') return 0;
    const basePrice = plans[selectedPlan].price;
    return Math.round(basePrice * (1 - discount / 100));
  };

  const handleSubscribe = () => {
    if (selectedPlan === 'gratis') {
      alert('Ya estás en plan Gratis');
      return;
    }
    alert(`¡Suscripción a ${plans[selectedPlan].name} confirmada!\nPrecio: $${calculatePrice().toLocaleString()}`);
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Planes</h1>
        {onBack && (
          <button onClick={onBack} style={styles.backButton}>← Volver</button>
        )}
      </div>

      <div style={styles.content}>
        <h2 style={styles.pageTitle}>Elige tu Plan</h2>
        <p style={styles.pageSubtitle}>Amplía tu negocio con las herramientas adecuadas</p>

        <div style={styles.promoBanner}>
          <div style={styles.promoBannerTitle}>🎉 OFERTA DE LANZAMIENTO</div>
          <div style={styles.promoBannerText}>50% off en Pro y Premium por 30 días</div>
          <span style={styles.promoBadge}>Válido hasta Febrero 15</span>
        </div>

        <div style={styles.plansGrid}>
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              onClick={() => {
                setSelectedPlan(key);
                setPromoApplied(null);
                setDiscount(0);
              }}
              style={{
                ...styles.planCard,
                ...(selectedPlan === key ? styles.planCardSelected : {}),
              }}
            >
              {plan.badge && (
                <div style={styles.planBadge}>{plan.badge}</div>
              )}

              <div style={styles.planName}>{plan.name}</div>
              <div style={styles.planPrice}>
                {plan.price === 0 ? 'Gratis' : `$${plan.price.toLocaleString()}`}
              </div>
              <div style={styles.planPriceSmall}>{plan.billing}</div>

              <ul style={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      ...styles.featureItem,
                      ...(i === plan.features.length - 1 ? styles.featureItemLast : {}),
                    }}
                  >
                    <span style={feature.included ? styles.featureCheck : styles.featureX}>
                      {feature.included ? '✓' : '✗'}
                    </span>
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {selectedPlan !== 'gratis' && (
          <div style={styles.promoSection}>
            <div style={styles.promoTitle}>Código de Promo (Opcional)</div>
            <div style={styles.promoInputGroup}>
              <input
                type="text"
                placeholder="LAUNCH50"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                style={styles.promoInput}
              />
              <button onClick={handlePromoValidate} style={styles.promoButton}>
                Validar
              </button>
            </div>
            {promoApplied && (
              <div style={styles.promoSuccess}>
                ✅ {promoCodes[promoApplied].message}
              </div>
            )}
          </div>
        )}

        {selectedPlan !== 'gratis' && (
          <div style={styles.priceSummary}>
            <div style={{ ...styles.summaryRow }}>
              <span style={styles.summaryLabel}>Precio regular:</span>
              <span style={{ ...styles.summaryValue, textDecoration: 'line-through', color: '#999' }}>
                ${plans[selectedPlan].price.toLocaleString()}
              </span>
            </div>
            {discount > 0 && (
              <div style={{ ...styles.summaryRow, ...styles.summaryDiscount }}>
                <span style={styles.summaryLabel}>Descuento ({discount}%):</span>
                <span>-${(plans[selectedPlan].price * discount / 100).toLocaleString()}</span>
              </div>
            )}
            <div style={{ ...styles.summaryRow, ...styles.summaryRowLast, ...styles.totalRow }}>
              <span>Total/mes:</span>
              <span>${calculatePrice().toLocaleString()}</span>
            </div>
          </div>
        )}

        <button onClick={handleSubscribe} style={styles.subscribeButton}>
          {selectedPlan === 'gratis' ? 'Ya estás en Gratis' : 'Suscribirse Ahora'}
        </button>
        {onBack && (
          <button onClick={onBack} style={styles.cancelButton}>Más Tarde</button>
        )}
      </div>

      <div style={styles.footer}>
        <p>Puedes cambiar de plan en cualquier momento. Sin compromiso.</p>
      </div>
    </div>
  );
}
