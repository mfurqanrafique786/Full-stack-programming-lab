import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'

export default function Register() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Register' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Create New Account</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>User Account Details</h2>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long
          </p>
          <p style={{ fontSize: '12px', color: '#e8000d', marginBottom: '20px' }}>*Required Fields</p>

          {[
            { label: 'Email Address', type: 'email' },
            { label: 'Password', type: 'password' },
            { label: 'Re-enter Password', type: 'password' },
            { label: 'First Name', type: 'text' },
            { label: 'Last Name', type: 'text' },
          ].map((field, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', width: '140px', textAlign: 'right', paddingRight: '10px' }}>
                {field.label} <span style={{ color: '#e8000d' }}>*</span>
              </label>
              <input type={field.type} style={{ width: '280px', padding: '6px', border: '1px solid #ccc', fontSize: '13px' }} />
            </div>
          ))}

          <div style={{ marginLeft: '140px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" style={{ fontSize: '12px' }}>Yes, I want to receive email about new products and specials!</label>
          </div>

          <div style={{ marginLeft: '140px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/my-account" style={{
              background: '#e8000d', color: '#fff', padding: '8px 20px',
              fontWeight: 'bold', fontSize: '13px', display: 'inline-block'
            }}>CREATE ACCOUNT</Link>
            <Link href="/forgot-password" style={{ color: '#2196f3', fontSize: '12px' }}>Forgpr your password?</Link>
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
