export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Have questions about Lab 08? We're here to help!
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📍 <strong>Address:</strong> 123 Tech Street, Islamabad</li>
            <li>📞 <strong>Phone:</strong> +92 300 1234567</li>
            <li>📧 <strong>Email:</strong> support@mynextapp.com</li>
          </ul>
        </section>

        {/* Dummy Form (Visual Only) */}
        <section className="bg-gray-50 p-6 rounded-xl border">
          <h2 className="text-xl font-bold mb-4">Send a Message</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-24"></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full">
              Send Message
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}