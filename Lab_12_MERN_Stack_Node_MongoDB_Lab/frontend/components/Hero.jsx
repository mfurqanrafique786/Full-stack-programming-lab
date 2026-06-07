const Hero = () => {
  return (
    <section className='min-h-screen bg-[#f5f5f5] flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-16'>

      <div className='max-w-xl'>
        <p className='text-orange-500 text-lg mb-4'>
          Modern Interior
        </p>

        <h1 className='text-5xl lg:text-7xl font-bold leading-tight'>
          Wooden Furniture Collection
        </h1>

        <p className='text-gray-600 mt-6 text-lg'>
          Premium quality wooden furniture for your dream home.
        </p>

        <button className='mt-8 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition'>
          Shop Now
        </button>
      </div>

      <div className='mt-12 lg:mt-0'>
     <img
  src='https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
  alt='Furniture'
  className='w-full max-w-lg rounded-2xl shadow-2xl'
/>
      </div>

    </section>
  );
};

export default Hero;