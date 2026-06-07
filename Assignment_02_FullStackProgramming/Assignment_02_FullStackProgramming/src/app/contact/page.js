import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Customer Support' }, { label: 'Contact Us' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' }}>Contact Our Customer Support</h2>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
            To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long
          </p>

          <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Online Sales &amp; Customer Support</h3>
          <p style={{ fontSize: '13px', marginBottom: '20px' }}>Call Us: 020 78989845</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '30px', marginBottom: '30px' }}>
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>Retail Store Location</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.8' }}>
                Hottub Store Loc<br />
                5000N, Ford avenue<br />
                Newyourk, NY 20145<br />
                888.123.1234
              </p>
            </div>
            <div style={{ background: '#eee' }} />
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '12px' }}>Services</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.8' }}>
                Hottub Store Loc<br />
                5000N, Ford avenue<br />
                Newyourk, NY 20145<br />
                888.123.1234
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>Contact Us</h3>
          {[
            { label: 'First name', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Subject', type: 'text' },
          ].map((field, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '12px', width: '120px', textAlign: 'right', paddingRight: '10px' }}>
                {field.label} <span style={{ color: '#e8000d' }}>*</span>
              </label>
              <input type={field.type} style={{ width: '260px', padding: '5px', border: '1px solid #ccc', fontSize: '12px' }} />
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <label style={{ fontSize: '12px', width: '120px', textAlign: 'right', paddingRight: '10px', paddingTop: '4px' }}>Your Message</label>
            <textarea rows={5} style={{ width: '260px', padding: '5px', border: '1px solid #ccc', fontSize: '12px', resize: 'vertical' }} />
          </div>
          <div style={{ marginLeft: '120px' }}>
            <button style={{
              background: '#e8000d', color: '#fff', padding: '8px 24px',
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
