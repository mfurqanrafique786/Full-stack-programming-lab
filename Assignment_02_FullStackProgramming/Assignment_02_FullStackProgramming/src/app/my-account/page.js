import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

const orders = [
  { id: '#303', date: 'December 18, 2014', status: 'On hold', total: '$ 699.00' },
  { id: '#307', date: 'December 18, 2014', status: 'On hold', total: '$ 799.00' },
]

export default function MyAccount() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'User Account', href: '/my-account' }, { label: 'My Account' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>User Profile Details</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          {/* User profile section */}
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>User profile</h2>
            <p style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Hellow User name! From your account you can view your recent orders, manage your shipping and billing addresss.</p>
            <Link href="/edit-account" style={{ color: '#2196f3', fontSize: '12px' }}>edit your password and account details.</Link>
          </div>

          {/* Recent Orders */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px' }}>Recent Orders</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 'normal', color: '#333' }}>Order</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 'normal', color: '#333' }}>Date</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 'normal', color: '#333' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 'normal', color: '#333' }}>Total</th>
                  <th style={{ textAlign: 'right', padding: '8px 0', fontWeight: 'normal', color: '#333' }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px 0' }}>
                      <Link href="/order-details" style={{ color: '#2196f3' }}>{order.id}</Link>
                    </td>
                    <td style={{ padding: '10px 0' }}>{order.date}</td>
                    <td style={{ padding: '10px 0' }}>{order.status}</td>
                    <td style={{ padding: '10px 0' }}>{order.total}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right' }}>
                      <Link href="/order-details" style={{
                        background: '#e8000d', color: '#fff', padding: '4px 12px',
                        fontSize: '11px', fontWeight: 'bold', display: 'inline-block'
                      }}>VIEW ORDERS</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* My Addresses */}
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>My Addresses</h2>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px' }}>The following addressess will be used on the checkout page by default</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {['Billing address', 'Billing address'].map((title, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: '13px', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '12px' }}>{title}</h3>
                  <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#555' }}>
                    Farrukh Javaid<br />
                    Hottub Spas<br />
                    Plot 10 Tech Society<br />
                    California, CA 20112<br />
                    United State
                  </p>
                  <Link href={i === 0 ? '/edit-billing' : '/edit-shipping'} style={{
                    background: '#e8000d', color: '#fff', padding: '6px 12px',
                    fontSize: '11px', fontWeight: 'bold', display: 'inline-block', marginTop: '12px'
                  }}>EDIT ADRESSES</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
