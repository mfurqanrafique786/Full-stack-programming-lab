import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

export default function Login() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'My Account' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Login Or Creat Account</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '30px' }}>
          {/* Login */}
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>User Login Details</h2>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Please sign in below with your login information.</p>
            <p style={{ fontSize: '12px', color: '#e8000d', marginBottom: '16px' }}>*Required Fields</p>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                Email <span style={{ color: '#e8000d' }}>*</span>
              </label>
              <input type="email" style={{ width: '100%', padding: '6px', border: '1px solid #ccc', fontSize: '13px' }} />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                Password <span style={{ color: '#e8000d' }}>*</span>
              </label>
              <input type="password" style={{ width: '100%', padding: '6px', border: '1px solid #ccc', fontSize: '13px' }} />
            </div>
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ fontSize: '12px' }}>Remember me th next time i visit</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link href="/my-account" style={{
                background: '#e8000d', color: '#fff', padding: '8px 20px',
                fontWeight: 'bold', fontSize: '13px', display: 'inline-block'
              }}>SIGN IN</Link>
              <Link href="/forgot-password" style={{ color: '#2196f3', fontSize: '12px' }}>Forgpt your password?</Link>
            </div>
          </div>

          {/* Divider */}
          <div style={{ background: '#eee' }} />

          {/* Register */}
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '12px' }}>New Customer</h2>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>As a registered Abt.com customer you can:</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12px', color: '#555', marginBottom: '20px', lineHeight: '1.8' }}>
              <li>Stpre billing &amp; shipping information</li>
              <li>Check your order status</li>
              <li>Track your delivery Status</li>
              <li>View your order history</li>
            </ul>
            <Link href="/register" style={{
              background: '#e8000d', color: '#fff', padding: '8px 20px',
              fontWeight: 'bold', fontSize: '13px', display: 'inline-block'
            }}>CREATE NEW ACCOUNT</Link>
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
