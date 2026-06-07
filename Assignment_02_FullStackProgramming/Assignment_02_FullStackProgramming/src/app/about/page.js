import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Breadcrumb from '../../components/Breadcrumb'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
      <Header />
      <div style={{ maxWidth: '960px', margin: '20px auto', padding: '0 20px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h1>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '2px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '16px' }}>Welcome to the Company</h2>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7', marginBottom: '12px' }}>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
              </p>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7' }}>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
            </div>
            <div style={{ width: '160px', height: '160px', background: '#f5f5f5', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>🛁</div>
          </div>

          <h2 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '12px' }}>Our Company members</h2>
          <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {['Jennifer Lawrence', 'Jennifer Lawrence', 'Jennifer Lawrence', 'Jennifer Lawrence'].map((name, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', height: '100px', background: '#e0e0e0', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>👤</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '2px' }}>{name}</div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>Business Consultant</div>
                <p style={{ fontSize: '10px', color: '#777', lineHeight: '1.4' }}>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor.</p>
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
