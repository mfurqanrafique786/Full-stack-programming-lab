import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

export default function OrderSummary() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'User Account', href: '/my-account' }, { label: 'Order Summry' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Order Summery</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <p style={{ color: '#5cb85c', fontSize: '13px', marginBottom: '20px' }}>Thank you. your order has been recieved</p>

          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Yor Order Summry</h2>
          <div style={{ fontSize: '13px', marginBottom: '12px', lineHeight: '2' }}>
            <div><span style={{ fontWeight: 'bold', width: '80px', display: 'inline-block' }}>Order # :</span> 0303</div>
            <div><span style={{ fontWeight: 'bold', width: '80px', display: 'inline-block' }}>Date :</span> December 21 2014</div>
            <div><span style={{ fontWeight: 'bold', width: '80px', display: 'inline-block' }}>Total :</span> 1 x $2500 = $2500</div>
          </div>
          <p style={{ fontSize: '12px', color: '#555', marginBottom: '24px', lineHeight: '1.6' }}>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account.
          </p>

          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Yor Order Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 'normal' }}>Product</th>
                <th style={{ textAlign: 'right', padding: '8px 0', fontWeight: 'normal' }}>Quantity</th>
                <th style={{ textAlign: 'right', padding: '8px 0', fontWeight: 'normal' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map(i => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px 0' }}>
                    <Link href="/product" style={{ color: '#2196f3' }}>Five person hottube spa with green light inside</Link>
                  </td>
                  <td style={{ padding: '10px 0', textAlign: 'right' }}>1</td>
                  <td style={{ padding: '10px 0', textAlign: 'right' }}>$ 699.00</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginBottom: '30px', fontSize: '13px' }}>
            {[
              { label: 'Cart Subtotal:', value: '$1400.00' },
              { label: 'Shipping:', value: 'Free Shippment' },
              { label: 'Payment method:', value: 'Direct Bank Transfer' },
              { label: 'Total with shipping:', value: '$1400.00', bold: true },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '40px' }}>
                <span style={{ fontWeight: 'bold' }}>{row.label}</span>
                <span style={{ minWidth: '140px', textAlign: 'right', fontWeight: row.bold ? 'bold' : 'normal' }}>{row.value}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Yor Bank details</h2>
          <div style={{ fontSize: '13px', marginBottom: '30px', lineHeight: '1.8' }}>
            <div><span style={{ width: '60px', display: 'inline-block', fontWeight: 'bold' }}>Bank :</span> Your Bank Name</div>
            <div><span style={{ width: '60px', display: 'inline-block', fontWeight: 'bold' }}>Acc# :</span> 2014 2545 4524 5654</div>
            <div><span style={{ width: '60px', display: 'inline-block', fontWeight: 'bold' }}>BIC :</span> 012476 541245641212</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', fontSize: '12px' }}>
            {['Customer details', 'Billing address', 'Shipping address'].map((title, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '10px' }}>{title}</h3>
                {i === 0 ? (
                  <div style={{ lineHeight: '1.8', color: '#555' }}>
                    <div>Farrukh Javaid</div>
                    <div>email@hotubdirect.com</div>
                    <div>0888 7578 787</div>
                  </div>
                ) : (
                  <div style={{ lineHeight: '1.8', color: '#555' }}>
                    Farrukh Javaid<br />Hottub Spas<br />Plot 10 Tech Society<br />California, CA 20112<br />United State
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
