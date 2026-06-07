import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

export default function Payment() {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const years = ['2014','2015','2016','2017','2018','2019','2020']

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Payments' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Secure Checkouts</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '24px' }}>Payment Information</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Step 1 */}
            <div>
              <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>
                <span style={{ color: '#e8000d', fontWeight: 'bold' }}>Step 1.</span> &nbsp;Billing Address
              </h3>
              {['First Name', 'Last Name', 'Email', 'Phone', 'Address'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                  <input type="text" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
                </div>
              ))}
              {['City', 'State'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                  <select style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px', background: '#fff' }}>
                    <option>New York</option>
                  </select>
                </div>
              ))}
              {['Zip Code', 'Country'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                  {i === 0 ? (
                    <input type="text" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
                  ) : (
                    <select style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px', background: '#fff' }}>
                      <option>United States</option>
                    </select>
                  )}
                </div>
              ))}

              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <input type="checkbox" id="shipDiff" />
                <label htmlFor="shipDiff" style={{ fontSize: '12px', color: '#2196f3' }}>Ship to a different address</label>
              </div>

              {/* Shipping address (collapsed) */}
              <div style={{ paddingTop: '8px', borderTop: '1px solid #eee' }}>
                {['First Name', 'Last Name', 'Email', 'Phone', 'Address'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                    <input type="text" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
                  </div>
                ))}
                {['City', 'State'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                    <select style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px', background: '#fff' }}>
                      <option>New York</option>
                    </select>
                  </div>
                ))}
                {['Zip Code', 'Country'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '12px', width: '100px', paddingRight: '8px' }}>{f} <span style={{ color: '#e8000d' }}>*</span></label>
                    {i === 0 ? (
                      <input type="text" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
                    ) : (
                      <select style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px', background: '#fff' }}>
                        <option>United States</option>
                      </select>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Steps 2 & 3 */}
            <div>
              <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>
                <span style={{ color: '#e8000d', fontWeight: 'bold' }}>Step 2.</span> &nbsp;Card Details
              </h3>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                <label style={{ fontSize: '12px', width: '110px', paddingRight: '8px' }}>Card Type</label>
                <input type="text" placeholder="Master Card" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
              </div>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                <label style={{ fontSize: '12px', width: '110px', paddingRight: '8px' }}>Card Number <span style={{ color: '#e8000d' }}>*</span></label>
                <input type="text" placeholder="1234 5678 9123 4567" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
              </div>
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                <label style={{ fontSize: '12px', width: '110px', paddingRight: '8px' }}>Expiration <span style={{ color: '#e8000d' }}>*</span></label>
                <select style={{ padding: '5px', border: '1px solid #ccc', fontSize: '12px', marginRight: '6px' }}>
                  {['01','02','03','04','05','06','07','08','09','10','11','12'].map(m => <option key={m}>{m}</option>)}
                </select>
                <select style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px', marginRight: '6px' }}>
                  {months.map(m => <option key={m}>{m}</option>)}
                </select>
                <select style={{ padding: '5px', border: '1px solid #ccc', fontSize: '12px' }}>
                  {years.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                <label style={{ fontSize: '12px', width: '110px', paddingRight: '8px' }}>Secure Code <span style={{ color: '#e8000d' }}>*</span></label>
                <input type="text" style={{ flex: 1, padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
              </div>

              <p style={{ fontSize: '11px', color: '#777', marginBottom: '8px' }}>Note: Please ensure the billing address you enter matches your credit card billing address.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
                <input type="checkbox" id="terms" defaultChecked />
                <label htmlFor="terms" style={{ fontSize: '12px', color: '#2196f3' }}>I Accept terms and Conditions</label>
              </div>

              <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>
                <span style={{ color: '#e8000d', fontWeight: 'bold' }}>Step 3.</span> &nbsp;Review Your Order
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', marginBottom: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <th style={{ textAlign: 'left', padding: '6px 0', fontWeight: 'normal' }}>Item name</th>
                    <th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 'normal' }}>price</th>
                    <th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 'normal' }}>Quantity</th>
                    <th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 'normal' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px 0' }}>XS SCYVA X SERUES 119</td>
                    <td style={{ padding: '8px 0', textAlign: 'right' }}>$ 699</td>
                    <td style={{ padding: '8px 0', textAlign: 'right' }}>1000</td>
                    <td style={{ padding: '8px 0', textAlign: 'right' }}>12000</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ fontSize: '13px', marginBottom: '16px' }}>
                <strong>Total with shipping:</strong> <span style={{ float: 'right' }}>$ 699.00</span>
              </div>
              <Link href="/order-summary" style={{
                background: '#5cb85c', color: '#fff', padding: '10px 20px', display: 'inline-flex',
                alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '13px', borderRadius: '2px'
              }}>🔒 Place Your Order ▶</Link>
            </div>
          </div>

          {/* Cart summary bottom */}
          <div style={{ borderTop: '1px solid #eee', marginTop: '30px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '13px', textAlign: 'right', flex: 1 }}>
              Cart summary (2 Items)<br />
              Total: <strong>$21.00</strong>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '10px' }}>
            <Link href="/shopping-cart" style={{ border: '1px solid #ccc', color: '#555', padding: '6px 16px', fontSize: '12px', display: 'inline-block' }}>Continue shopping</Link>
            <Link href="/order-summary" style={{ background: '#e8000d', color: '#fff', padding: '6px 16px', fontSize: '12px', fontWeight: 'bold', display: 'inline-block' }}>Proceed to checkout</Link>
          </div>
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <Footer />
    </div>
  )
}
