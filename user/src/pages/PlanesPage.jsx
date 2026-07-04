import React, { useState } from 'react';

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
  closeButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
  },
  
  heroSection: {
    background: 'linear-gradient(135deg, #6C3FE0 0%, #4a2c8f 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    marginBottom: '24px',
  },
  heroIcon: {
    fontSize: '48px',
    marginBottom: '12px',
  },
  heroTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  heroSubtitle: {
    fontSize: '14px',
    opacity: 0.95,
  },
  
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '24px',
  },
  benefitCard: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '12px',
    textAlign: 'center',
  },
  benefitIcon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  benefitTitle: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  benefitDescription: {
    fontSize: '11px',
    color: '#666',
  },
  
  priceCard: {
    background: '#ede8fc',
    border: '2px solid #6C3FE0',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '24px',
  },
  priceBig: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#6C3FE0',
    marginBottom: '4px',
  },
  priceSmall: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '12px',
  },
  discountBadge: {
    display: 'inline-block',
    background: '#F5A623',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  promoText: {
    fontSize: '11px',
    color: '#0F6E56',
    fontWeight: '600',
  },
  
  featuresList: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  },
  featuresTitle: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  featureItem: {
    fontSize: '12px',
    color: '#666',
    padding: '8px 0',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
  },
  featureItemLast: {
    borderBottom: 'none',
  },
  featureCheck: {
    color: '#0F6E56',
    fontWeight: '700',
    marginRight: '8px',
  },
  
  promoSection: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '24px',
  },
  promoTitle: {
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  promoInputGroup: {
    display: 'flex',
    gap: '6px',
  },
  promoInput: {
    flex: 1,
    padding: '8px 10px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    fontSize: '12px',
  },
  promoValidate: {
    padding: '8px 10px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  promoSuccess: {
    background: '#E1F5EE',
    color: '#0F6E56',
    padding: '8px',
    borderRadius: '6px',
    fontSize: '11px',
    marginTop: '8px',
    fontWeight: '600',
  },
  
  comparisonSection: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '24px',
  },
  comparisonTitle: {
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  comparisonTable: {
    fontSize: '11px',
    width: '100%',
  },
  comparisonTh: {
    padding: '6px',
    fontWeight: '600',
    borderBottom: '1px solid #e0e0e0',
  },
  comparisonTd: {
    padding: '6px',
    borderBottom: '1px solid #f0f0f0',
  },
  
  subscribeButton: {
    width: '100%',
    padding: '12px',
    background: '#6C3FE0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  laterButton: {
    width: '100%',
    padding: '10px',
    background: 'transparent',
    color: '#6C3FE0',
    border: '1px solid #6C3FE0',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  
  faqSection: {
    background: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '16px',
  },
  faqTitle: {
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  faqItem: {
    marginBottom: '12px',
  },
  faqQuestion: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  faqAnswer: {
    fontSize: '11px',
    color: '#666',
  },
};

export default function PlanesPage({ onClose }) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(null);
  const [discount, setDiscount] = useState(50);

  const promoCodes = {
    'LAUNCH50': { discount: 50, message: '50% off primeros 3 meses' },
    'REFERRAL': { discount: 100, message: '1 mes gratis' },
    'FRIEND20': { discount: 20, message: 'Referral 20% off' },
  };

  const handlePromoValidate = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code]) {
      setPromoApplied(code);
      setDiscount(promoCodes[code].discount);
    } else {
      alert('Código no válido');
      setPromoApplied(null);
      setDiscount(50);
    }
  };

  const basePrice = 4990;
  const monthsAtDiscount = discount === 100 ? 1 : 3;
  const pricePerMonth = discount === 100 ? 0 : basePrice * (1 - discount / 100);
  const totalPrice = discount === 100 ? 0 : pricePerMonth * monthsAtDiscount;

  const handleSubscribe = () => {
    alert(
      `¡Suscripción confirmada!\n\n` +
      `Plan: Vuelve Plus\n` +
      `Precio: $${totalPrice.toLocaleString()} ${discount === 100 ? '(1 mes GRATIS)' : `por ${monthsAtDiscount} meses`}\n` +
      `${promoApplied ? `Código: ${promoApplied}` : ''}`
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Vuelve Plus</h1>
        {onClose && (
          <button onClick={onClose} style={styles.closeButton}>✕</button>
        )}
      </div>

      <div style={styles.content}>
        
        <div style={styles.heroSection}>
          <div style={styles.heroIcon}>⭐</div>
          <h2 style={styles.heroTitle}>Desbloquea Plus</h2>
          <p style={styles.heroSubtitle}>
            Puntos 2x, desafíos semanales y mucho más
          </p>
        </div>

        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>2️⃣</div>
            <div style={styles.benefitTitle}>Puntos 2x</div>
            <div style={styles.benefitDescription}>En todas las compras</div>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>🎯</div>
            <div style={styles.benefitTitle}>Desafíos</div>
            <div style={styles.benefitDescription}>Semanales con premios</div>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>♾️</div>
            <div style={styles.benefitTitle}>Canjes Ilimitados</div>
            <div style={styles.benefitDescription}>Sin restricción</div>
          </div>

          <div style={styles.benefitCard}>
            <div style={styles.benefitIcon}>👥</div>
            <div style={styles.benefitTitle}>Referral</div>
            <div style={styles.benefitDescription}>Gana con amigos</div>
          </div>
        </div>

        <div style={styles.priceCard}>
          <div style={styles.discountBadge}>50% OFF LANZAMIENTO</div>
          <div style={styles.priceBig}>
            ${(pricePerMonth || 0).toLocaleString()}
          </div>
          <div style={styles.priceSmall}>
            por mes {discount === 100 ? '(1 GRATIS)' : `× ${monthsAtDiscount} meses`}
          </div>
          <div style={styles.promoText}>
            ✅ Ahorro: ${((basePrice * monthsAtDiscount) - totalPrice).toLocaleString()}
          </div>
        </div>

        <div style={styles.featuresList}>
          <div style={styles.featuresTitle}>✓ Incluye:</div>
          {[
            'Puntos 2x en todas las compras',
            'Canjes ilimitados',
            'Desafíos semanales con premios',
            'Programa referral (gana sin límite)',
            'Recomendaciones personalizadas',
            'Sin publicidad',
            'Acceso a features beta',
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                ...styles.featureItem,
                ...(i === 6 ? styles.featureItemLast : {}),
              }}
            >
              <span style={styles.featureCheck}>✓</span>
              {feature}
            </div>
          ))}
        </div>

        <div style={styles.promoSection}>
          <div style={styles.promoTitle}>¿Tienes código promocional?</div>
          <div style={styles.promoInputGroup}>
            <input
              type="text"
              placeholder="Ingresa código"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              style={styles.promoInput}
            />
            <button onClick={handlePromoValidate} style={styles.promoValidate}>
              Usar
            </button>
          </div>
          {promoApplied && (
            <div style={styles.promoSuccess}>
              ✅ {promoCodes[promoApplied].message}
            </div>
          )}
        </div>

        <div style={styles.comparisonSection}>
          <div style={styles.comparisonTitle}>📊 Comparación</div>
          <table style={styles.comparisonTable}>
            <tbody>
              <tr>
                <th style={styles.comparisonTh}>Feature</th>
                <th style={styles.comparisonTh}>Gratis</th>
                <th style={styles.comparisonTh}>Plus</th>
              </tr>
              <tr>
                <td style={styles.comparisonTd}>Puntos 2x</td>
                <td style={styles.comparisonTd}>✗</td>
                <td style={{ ...styles.comparisonTd, color: '#0F6E56', fontWeight: '600' }}>✓</td>
              </tr>
              <tr>
                <td style={styles.comparisonTd}>Canjes ilimitados</td>
                <td style={styles.comparisonTd}>✗</td>
                <td style={{ ...styles.comparisonTd, color: '#0F6E56', fontWeight: '600' }}>✓</td>
              </tr>
              <tr>
                <td style={styles.comparisonTd}>Desafíos semanales</td>
                <td style={styles.comparisonTd}>✗</td>
                <td style={{ ...styles.comparisonTd, color: '#0F6E56', fontWeight: '600' }}>✓</td>
              </tr>
              <tr>
                <td style={styles.comparisonTd}>Referral program</td>
                <td style={styles.comparisonTd}>✗</td>
                <td style={{ ...styles.comparisonTd, color: '#0F6E56', fontWeight: '600' }}>✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={styles.faqSection}>
          <div style={styles.faqTitle}>❓ Preguntas Frecuentes</div>

          <div style={styles.faqItem}>
            <div style={styles.faqQuestion}>¿Puedo cambiar de plan después?</div>
            <div style={styles.faqAnswer}>Sí, sin problemas. Cambia cuando quieras.</div>
          </div>

          <div style={styles.faqItem}>
            <div style={styles.faqQuestion}>¿Hay contrato?</div>
            <div style={styles.faqAnswer}>No. Cancela en cualquier momento.</div>
          </div>

          <div style={styles.faqItem}>
            <div style={styles.faqQuestion}>¿Cuándo suben puntos?</div>
            <div style={styles.faqAnswer}>Al instante después de cada compra.</div>
          </div>
        </div>

        <button onClick={handleSubscribe} style={styles.subscribeButton}>
          Suscribirse Ahora
        </button>
        <button onClick={onClose} style={styles.laterButton}>
          Tal vez después
        </button>
      </div>
    </div>
  );
}
