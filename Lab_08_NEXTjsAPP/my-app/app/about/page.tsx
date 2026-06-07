export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Our Project</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We are dedicated to building fast, modern web applications using Next.js 15. 
          Our goal is to master TypeScript and Tailwind CSS to create seamless user 
          experiences that work beautifully on any device.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-lg">Lead Developer</h3>
            <p className="text-gray-500 italic">Expert in React & Next.js</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-lg">UI/UX Designer</h3>
            <p className="text-gray-500 italic">Specializing in Tailwind CSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}