import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'My Account', href: '/my-account' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Forget Your Password</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>User Account Details</h2>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Please enter your email address below to retrieve your password.</p>
          <p style={{ fontSize: '12px', color: '#e8000d', marginBottom: '20px' }}>*Required Fields</p>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <label style={{ fontSize: '12px', width: '80px', textAlign: 'right', paddingRight: '10px' }}>
              Email <span style={{ color: '#e8000d' }}>*</span>
            </label>
            <input type="email" style={{ width: '280px', padding: '6px', border: '1px solid #ccc', fontSize: '13px' }} />
          </div>

          <div style={{ marginLeft: '80px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" style={{ fontSize: '12px' }}>Remember me th next time i visit</label>
          </div>

          <div style={{ marginLeft: '80px' }}>
            <button style={{
              background: '#e8000d', color: '#fff', padding: '8px 20px',
              border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer'
            }}>SUBMIT</button>
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
