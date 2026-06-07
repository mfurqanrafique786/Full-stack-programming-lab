import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const products = [
  { id: 1, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 2, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 3, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 4, name: 'XS SCYBA X SET+ES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 5, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 6, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 7, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
  { id: 8, name: 'XS SCYBA X SERUES 119', price: '$500.00', desc: 'The goods of our stores are very reliable and due we care about the customer' },
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />

      {/* Secondary nav */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '0 20px', display: 'flex', gap: '20px' }}>
        {['HOME', 'PRODUCTS', 'SPECIAL OFFERS', 'CUSTC'].map((item, i) => (
          <a key={i} href="#" style={{
            display: 'block', padding: '10px 0', fontSize: '13px', color: i === 0 ? '#e8000d' : '#555',
            borderBottom: i === 0 ? '2px solid #e8000d' : 'none', fontWeight: i === 0 ? 'bold' : 'normal'
          }}>{item}</a>
        ))}
      </div>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)', padding: '40px 20px', display: 'flex', alignItems: 'center', gap: '40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: '#e8000d', fontSize: '28px', fontWeight: 'bold', lineHeight: '1.3', marginBottom: '12px' }}>
            Barrier Reef 158 Jet<br />TV- Stereo - Home Theater<br />Supter Spa
          </h1>
          <p style={{ color: '#fff', fontSize: '13px', marginBottom: '8px' }}>Extra Large and Deep 8 Person</p>
          <p style={{ color: '#ccc', fontSize: '12px', marginBottom: '20px' }}>158 Jet Supper Spa, TV-Home Theater Spa System,</p>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', marginBottom: '16px' }}>$4899.00</div>
          <Link href="/product" style={{
            background: '#e8000d', color: '#fff', padding: '10px 24px', display: 'inline-block',
            fontWeight: 'bold', fontSize: '13px', borderRadius: '2px'
          }}>More Details</Link>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '350px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px' }}>
            🛁 Hot Tub Image
          </div>
        </div>
        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '12px', right: '20px', display: 'flex', gap: '6px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#fff' : 'rgba(255,255,255,0.4)' }} />
          ))}
        </div>
      </div>

      {/* 3 promo banners */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '0' }}>
        {[
          { label: '5-7 PERSON SPA', bg: '#1a237e', textColor: '#fff' },
          { label: 'TV THEATER SPA', bg: '#37474f', textColor: '#fff' },
          { label: 'SAVE 50%', bg: '#e8000d', textColor: '#fff', big: true },
        ].map((item, i) => (
          <div key={i} style={{ background: item.bg, padding: '24px 16px', textAlign: 'center', color: item.textColor }}>
            <div style={{ fontSize: item.big ? '36px' : '16px', fontWeight: 'bold', marginBottom: '8px' }}>{item.label}</div>
            <p style={{ fontSize: '11px', opacity: 0.8 }}>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIH VEL VELIT AUCTOR</p>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>NEW PRODUCTS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {products.map((p) => (
              <div key={p.id} style={{ border: '1px solid #eee', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ background: '#f5f5f5', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>🛁</div>
                <div style={{ padding: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>{p.name}</div>
                  <p style={{ fontSize: '11px', color: '#777', marginBottom: '8px', lineHeight: '1.4' }}>{p.desc}</p>
                  <div style={{ color: '#e8000d', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>{p.price}</div>
                  <Link href="/shopping-cart" style={{
                    background: '#e8000d', color: '#fff', padding: '6px 10px', display: 'block',
                    textAlign: 'center', fontSize: '11px', fontWeight: 'bold', borderRadius: '2px', marginBottom: '6px'
                  }}>🛒 ADD TO CART</Link>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a href="#" style={{ fontSize: '10px', color: '#2196f3' }}>ADD TO WISH LIST</a>
                    <Link href="/product" style={{ fontSize: '10px', color: '#2196f3' }}>MORE DETIALS</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
