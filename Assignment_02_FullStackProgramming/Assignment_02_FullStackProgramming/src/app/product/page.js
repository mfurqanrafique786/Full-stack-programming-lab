import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Product() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '2px' }}>
          <h1 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h1>
          <p style={{ fontSize: '11px', color: '#999', marginBottom: '16px' }}>Abt Model:B22CS30SNS5 | UPC Code: /B22CS5867Z5</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 280px', gap: '24px' }}>
            {/* Images */}
            <div style={{ gridColumn: '1' }}>
              <div style={{ width: '100%', height: '220px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', marginBottom: '10px', border: '1px solid #eee' }}>🛁</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ width: '50px', height: '40px', background: '#f0f0f0', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px' }}>🛁</div>
                ))}
              </div>
              <div style={{ marginTop: '8px' }}>
                <a href="#" style={{ color: '#2196f3', fontSize: '12px' }}>+ Larger View</a>
              </div>
            </div>

            {/* Details */}
            <div>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '8px' }}>
                {'★★★★☆'.split('').map((s, i) => <span key={i} style={{ color: i < 4 ? '#f60' : '#ccc', fontSize: '14px' }}>{s}</span>)}
                <span style={{ fontSize: '11px', color: '#2196f3', marginLeft: '4px' }}>(4 reviews)</span>
              </div>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Retail Price:<span style={{ textDecoration: 'line-through' }}>$2199.00</span></div>
              <div style={{ fontSize: '11px', color: '#e8000d', marginBottom: '4px' }}>Sale price</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#e8000d', marginBottom: '4px' }}>$1979.00</div>
              <a href="#" style={{ fontSize: '11px', color: '#2196f3', marginBottom: '16px', display: 'block' }}>Low Price Guarantee</a>

              <div style={{ fontSize: '12px', lineHeight: '1.8', marginBottom: '16px' }}>
                <div><strong>Size/Seating Capacity</strong></div>
                <div style={{ color: '#555' }}>77", 77", 32" / 6 Persons</div>
                <div><strong>Seating Design</strong></div>
                <div style={{ color: '#555' }}>Bucket, Lounge, Chair, Bench</div>
                <div><strong>Water Capacity / Dry Weight</strong></div>
                <div style={{ color: '#555' }}>305 Gallons / 573 lbs</div>
                <div><strong>Number of Pumps</strong></div>
                <div style={{ color: '#555' }}>2 X 5HP</div>
                <div><strong>Electrical</strong></div>
                <div style={{ color: '#555' }}>5.5 KW Heavy Heater, 220V, 50 amp /ETL Certificate</div>
              </div>

              <div style={{ background: '#e8f5e9', color: '#4caf50', fontSize: '12px', padding: '4px 8px', display: 'inline-block', marginBottom: '12px', borderRadius: '2px' }}>In Stock (available)</div>

              <Link href="/shopping-cart" style={{
                background: '#e8000d', color: '#fff', padding: '10px 20px', display: 'inline-flex',
                alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '13px', borderRadius: '2px'
              }}>❤️ ADD TO CART</Link>
            </div>

            {/* Price Calculator */}
            <div style={{ border: '1px solid #eee', padding: '14px', fontSize: '12px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>Price Calculator</h3>
              {['Interior Color:', 'Outside Shell Color:', 'Circulation Pump:', 'Polar Foam:', 'Cover / Steps:', 'Extra Filter Sets:', 'Deluxe Cover Lifter:', 'Salt Water Sanitation System:', 'TV/DVD/Entertainment', 'Backyard Delivery:', 'Jets:', 'Perimeter Lighting:', 'Premium Popup Speakers:', 'Waterfall:', 'Spa Surround:'].map((item, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>
                  <div style={{ color: '#555', marginBottom: '2px' }}>{item}</div>
                  <select style={{ width: '100%', padding: '3px', border: '1px solid #ddd', fontSize: '11px', background: '#fafafa' }}>
                    <option></option>
                  </select>
                </div>
              ))}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ color: '#555', marginBottom: '2px' }}>Quantity:</div>
                <input type="number" defaultValue="1" style={{ width: '100%', padding: '3px', border: '1px solid #ddd', fontSize: '11px' }} />
              </div>
              <div style={{ textAlign: 'right', fontWeight: 'bold', color: '#e8000d', marginBottom: '10px', fontSize: '13px' }}>Total Price: $650.00</div>
              <Link href="/shopping-cart" style={{
                background: '#e8000d', color: '#fff', padding: '8px', display: 'block',
                textAlign: 'center', fontWeight: 'bold', fontSize: '12px', borderRadius: '2px'
              }}>❤️ ADD TO CART</Link>

              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Download Resources</h4>
                {['Full Line Brochure', "Owner's Manual", 'Specifications Sheet'].map((r, i) => (
                  <a key={i} href="#" style={{ display: 'block', color: '#e8000d', fontSize: '11px', marginBottom: '4px' }}>📄 {r}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #eee', paddingTop: '16px' }}>
            <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #ddd', marginBottom: '16px' }}>
              {['Details', 'Quick Specs', 'Accessories', 'Reviews', 'Q & A'].map((tab, i) => (
                <a key={i} href="#" style={{
                  padding: '8px 16px', fontSize: '13px', border: '1px solid #ddd', marginRight: '-1px',
                  background: i === 0 ? '#fff' : '#f5f5f5', borderBottom: i === 0 ? '1px solid #fff' : '1px solid #ddd',
                  fontWeight: i === 0 ? 'bold' : 'normal', color: '#333'
                }}>{tab}</a>
              ))}
            </div>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Product Details</h3>
            <p style={{ fontSize: '12px', color: '#555', marginBottom: '8px' }}>Energy Star Rated - No</p>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h3>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7' }}>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <Footer />
    </div>
  )
}
