import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      {/* Brand logos bar */}
      <div style={{ background: '#fff', padding: '20px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #eee', flexWrap: 'wrap' }}>
        <div style={{ background: '#f60', color: '#fff', padding: '8px 16px', fontWeight: 'bold', fontSize: '13px', borderRadius: '4px' }}>
          SAVE $1,000'S<br /><span style={{ fontSize: '10px' }}>ON THE TOP SPA BRANDS</span>
        </div>
        <div style={{ color: '#2196f3', fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic' }}>Oceanic<span style={{ fontStyle: 'normal', color: '#4fc3f7' }}>Spa</span></div>
        <div style={{ color: '#e91e63', fontSize: '18px', fontWeight: 'bold' }}>Caldera<span style={{ color: '#999' }}>Spas</span></div>
        <div style={{ color: '#4caf50', fontSize: '18px', fontWeight: 'bold' }}>Island<span style={{ color: '#999' }}>Spas</span> <span style={{ fontSize: '10px', color: '#999' }}>by ARTESIAN</span></div>
      </div>

      {/* Main footer */}
      <div style={{ background: '#2d2d2d', color: '#ccc', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {/* Contact */}
          <div style={{ flex: '1', minWidth: '180px' }}>
            <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '13px', fontWeight: 'bold' }}>CONTACT US</h4>
            <p style={{ fontSize: '12px', lineHeight: '1.8' }}>yoursitename.com</p>
            <p style={{ fontSize: '12px', lineHeight: '1.8' }}>CALL 24/7: 888 - 201 -8899</p>
            <p style={{ fontSize: '12px', lineHeight: '1.8' }}>Your Address:<br />Street<br />State & Zip Code<br />City & Country</p>
            <p style={{ fontSize: '12px', lineHeight: '1.8' }}>Email: servicemail@yoursitename.com</p>
            <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
              {['🐦', '📘', '💼', '📱', '▶️', '📌'].map((icon, i) => (
                <span key={i} style={{ background: '#555', padding: '4px 6px', borderRadius: '3px', fontSize: '12px', cursor: 'pointer' }}>{icon}</span>
              ))}
            </div>
          </div>

          {/* Information */}
          <div style={{ flex: '1', minWidth: '140px' }}>
            <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '13px', fontWeight: 'bold' }}>INFORMATION</h4>
            {['ABOUT US', 'CUSTOMER SERVICE', 'PRIVACY POLICY', 'SITE MAP', 'SEARCH TERMS', 'CONATACT US', 'ABOUT US'].map((item, i) => (
              <div key={i} style={{ marginBottom: '6px' }}>
                <Link href={item === 'ABOUT US' ? '/about' : item === 'CONATACT US' ? '/contact' : '#'} style={{ color: '#ccc', fontSize: '12px', borderBottom: '1px solid #555', display: 'block', paddingBottom: '4px' }}>{item}</Link>
              </div>
            ))}
          </div>

          {/* My Account */}
          <div style={{ flex: '1', minWidth: '120px' }}>
            <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '13px', fontWeight: 'bold' }}>MY ACCOUNT</h4>
            {[{ label: 'SIGN IN', href: '/login' }, { label: 'VIEW CART', href: '/shopping-cart' }, { label: 'MY WISHLIST', href: '/my-account' }].map((item, i) => (
              <div key={i} style={{ marginBottom: '6px' }}>
                <Link href={item.href} style={{ color: '#ccc', fontSize: '12px', borderBottom: '1px solid #555', display: 'block', paddingBottom: '4px' }}>{item.label}</Link>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ flex: '1', minWidth: '180px' }}>
            <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '13px', fontWeight: 'bold' }}>SIGNUP FOR A NEWS LETER</h4>
            <p style={{ fontSize: '12px', marginBottom: '8px' }}>SIGN UP FOR OUR NEWS LETTER:</p>
            <input type="email" style={{ width: '100%', padding: '6px', background: '#444', border: '1px solid #555', color: '#fff', fontSize: '12px', marginBottom: '12px' }} />
            <p style={{ fontSize: '12px', marginBottom: '6px', color: '#fff' }}>PAYMENT SOLUTIONS</p>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {['VISA', 'MC', 'AMEX', 'PAYPAL', 'DISC'].map((card, i) => (
                <span key={i} style={{ background: '#fff', color: '#333', padding: '2px 6px', fontSize: '10px', borderRadius: '2px', fontWeight: 'bold' }}>{card}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #444', fontSize: '12px', color: '#888' }}>
          © 2014 Hottubspaservice.com. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
