import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

const cartItems = [
  { name: 'The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version', desc: '220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/ convertible To 220 V / 4KW Heater', price: '$9.00', delivery: 'Standard (7 - 10 business days)' },
  { name: 'The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version', desc: '220 V/50 AMP – 4.5KW Heater 110 V/15 AMP – 1KW Heater/ convertible To 220 V / 4KW Heater', price: '$9.00', delivery: 'Standard (7 - 10 business days)' },
]

export default function ShoppingCart() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shopping Cart' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Shopping Cart</h1>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px' }}>Your Shopping Cart</h2>

          <div style={{ background: '#e8f5e9', border: '1px solid #c8e6c9', padding: '8px 12px', marginBottom: '12px', fontSize: '12px', color: '#2e7d32' }}>
            ✅ The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in &nbsp;<strong>was just added cart.</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#555', marginBottom: '8px' }}>
            <span>Items added: <a href="#" style={{ color: '#2196f3' }}>user_name</a></span>
            <span>Items total</span>
          </div>

          {cartItems.map((item, i) => (
            <div key={i} style={{ border: '1px solid #eee', padding: '12px', marginBottom: '8px', display: 'grid', gridTemplateColumns: '50px 1fr auto auto' , gap: '12px', alignItems: 'start' }}>
              <div style={{ width: '50px', height: '50px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🛁</div>
              <div>
                <Link href="/product" style={{ color: '#2196f3', fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>{item.name}</Link>
                <p style={{ fontSize: '11px', color: '#777', lineHeight: '1.4' }}>{item.desc}</p>
              </div>
              <div style={{ fontSize: '12px', color: '#555', textAlign: 'center' }}>
                <div>Quantity: <select style={{ fontSize: '11px', padding: '1px', border: '1px solid #ccc' }}><option>10</option></select></div>
                <div style={{ color: '#999', fontSize: '11px', marginTop: '4px' }}>{item.delivery}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '20px' }}>{item.price}</div>
                <div style={{ fontSize: '11px' }}>
                  <a href="#" style={{ color: '#e8000d' }}>Remove</a> |{' '}
                  <a href="#" style={{ color: '#2196f3' }}>Edit Your Order</a>
                </div>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'right', padding: '12px 0', borderTop: '1px solid #eee', marginTop: '8px' }}>
            <div style={{ fontSize: '13px', marginBottom: '12px' }}>
              <strong>Cart summary (2 items)</strong><br />
              Total: <strong>$21.00</strong>
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Link href="/category" style={{
                border: '1px solid #ccc', color: '#555', padding: '8px 20px', fontSize: '13px', display: 'inline-block'
              }}>Continue shopping</Link>
              <Link href="/payment" style={{
                background: '#e8000d', color: '#fff', padding: '8px 20px', fontSize: '13px',
                fontWeight: 'bold', display: 'inline-block'
              }}>PROCEED TO CHECKOUT</Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <Footer />
    </div>
  )
}
