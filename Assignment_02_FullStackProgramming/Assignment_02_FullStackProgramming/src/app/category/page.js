import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

const products = Array(6).fill(null).map((_, i) => ({
  id: i + 1, name: 'XS SCYBA X SERUES 119', price: '$500.00',
  desc: 'The goods of our stores are very reliable and due we care about the customer'
}))

export default function Category() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Catagory' }]} />
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px' }}>
          {/* Sidebar */}
          <div>
            <div style={{ background: '#fff', padding: '16px', borderRadius: '2px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>Shopping Options</h3>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>SEATING CAPACITY</h4>
                {['2 - 4 PEOPLE', '5 - 7 PEOPLE', '8 PEOPLE AND MORE'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ color: '#ccc', fontSize: '10px' }}>▶</span>
                    <a href="#" style={{ fontSize: '12px', color: i === 0 ? '#e8000d' : '#555' }}>{item}</a>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>CHOOSE SIZES</h4>
                {['5 - 6 FEET LONG', '6 - 7 FEET LONG', '7 - 8 FEET LONG', '8 FEET TO LARGE SIZE'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ color: '#ccc', fontSize: '10px' }}>▶</span>
                    <a href="#" style={{ fontSize: '12px', color: '#555' }}>{item}</a>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>SPAS BY TYLE</h4>
                {['PLUG AND PLAY 110 VOLT', 'TV - STERIO SPAS', 'CORNER SPAS', 'PORTABLE SPAS', 'DEEPER SPAS'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ color: '#ccc', fontSize: '10px' }}>▶</span>
                    <a href="#" style={{ fontSize: '12px', color: '#555' }}>{item}</a>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>PRICE RANGES FROM</h4>
                {['UNDER $3,000', '$3,000 TO 4,000', '$4,000 TO 5,000', '$5,000 TO 6,000', '$6,000 +'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ color: '#ccc', fontSize: '10px' }}>▶</span>
                    <a href="#" style={{ fontSize: '12px', color: '#555' }}>{item}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div style={{ background: '#fff', padding: '20px', borderRadius: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: 'bold' }}>Top Product Listing</h2>
              <div style={{ fontSize: '12px', color: '#555' }}>
                6 Item(s) &nbsp;&nbsp;
                Show <select style={{ padding: '2px 4px', fontSize: '12px', border: '1px solid #ccc' }}><option>9</option></select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {products.map((p) => (
                <div key={p.id} style={{ border: '1px solid #eee', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ background: '#f5f5f5', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>🛁</div>
                  <div style={{ padding: '10px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>{p.name}</div>
                    <p style={{ fontSize: '11px', color: '#777', marginBottom: '8px', lineHeight: '1.4' }}>{p.desc}</p>
                    <div style={{ color: '#e8000d', fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>{p.price}</div>
                    <Link href="/shopping-cart" style={{
                      background: '#e8000d', color: '#fff', padding: '5px 8px', display: 'block',
                      textAlign: 'center', fontSize: '11px', fontWeight: 'bold', marginBottom: '6px'
                    }}>🛒 ADD TO CART</Link>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <a href="#" style={{ fontSize: '10px', color: '#2196f3' }}>ADD TO WISH LIST</a>
                      <Link href="/product" style={{ fontSize: '10px', color: '#2196f3' }}>MORE DETIALS</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Related products */}
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>Customers Who Viewed This Item Also</h3>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ cursor: 'pointer', fontSize: '18px' }}>❮</span>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
                    <div style={{ width: '40px', height: '40px', background: '#f5f5f5', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🛁</div>
                    <div>
                      <div style={{ color: '#e8000d', fontSize: '11px', fontWeight: 'bold' }}>$2,549.15</div>
                      <div style={{ fontSize: '10px', color: '#333' }}>Bosch 22 Cu. Ft Stainless Refrigerator</div>
                      <div style={{ fontSize: '10px', color: '#999' }}>B22CS30SNS5</div>
                    </div>
                  </div>
                ))}
                <span style={{ cursor: 'pointer', fontSize: '18px' }}>❯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <Footer />
    </div>
  )
}
