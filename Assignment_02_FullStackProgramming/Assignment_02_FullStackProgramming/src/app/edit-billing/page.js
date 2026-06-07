import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

export default function EditBilling() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'User Account', href: '/my-account' }, { label: 'My Account', href: '/my-account' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Edit Billing Address</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Please fill the form bellow to update your Profile details.</p>
          <p style={{ fontSize: '12px', color: '#e8000d', marginBottom: '20px' }}>*Required Fields</p>

          {[
            { label: 'First Name', type: 'text' },
            { label: 'Last Name', type: 'text' },
            { label: 'Email', type: 'email' },
            { label: 'Phone', type: 'tel' },
            { label: 'City', type: 'text' },
            { label: 'State', type: 'text' },
            { label: 'Zip Code', type: 'text' },
            { label: 'Country', type: 'text' },
          ].map((field, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', width: '120px', textAlign: 'right', paddingRight: '10px' }}>
                {field.label} <span style={{ color: '#e8000d' }}>*</span>
              </label>
              <input type={field.type} style={{ width: '280px', padding: '6px', border: '1px solid #ccc', fontSize: '13px' }} />
            </div>
          ))}

          <div style={{ marginLeft: '120px', marginTop: '8px' }}>
            <button style={{
              background: '#e8000d', color: '#fff', padding: '8px 20px',
              border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer'
            }}>UPDATE ADDRESS</button>
          </div>
        </div>
      </div>
      <div style={{ height: '40px' }} />
      <Footer />
    </div>
  )
}
