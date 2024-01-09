import Background from '../assets/images/widepic.avif';

function Home() {
  return (
    <div >
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>

      <div className='flex flex-column justify-center mx-auto relative z-10'>
        <div className='flex flex-col place-items-center h-screen'>
          <h3 className='p-5 text-5xl font-semibold mt-40 text-white rounded'>Welcome to Your Plant Inventory</h3>

        </div>
      </div>
    </div>
  );
}

export default Home;
