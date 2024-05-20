import React, { useState, useEffect } from 'react';
import Search_bar from './Search_bar';
import { Typed } from 'react-typed';




function HeroDiv() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1685150351422-6aea639e39f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsZ2VyaWElMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1669942966111-4ba87fdaf4cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFsZ2VyaWElMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1575664274476-e02d99195164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxnZXJpYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1535585538107-e457d37fbde5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxnZXJpYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1582638682484-02feebeafc3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFsZ2VyaWF8ZW58MHx8MHx8fDA%3D',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  


  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    // <div className=' flex flex-col items-center mt-6 lg:mt-20'>
    //   {/* <div className="absolute top-[250px] bottom-0 left-0 right-0 h-fit">
    //       <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
    //         Explore our beautiful algeria and enjoy its wonders
    //       </h1>
    //       <p className="flex justify-center text-white mt-4 px-6 text-center">
    //         Find and write about your experiences in our local territories
    //       </p>
            
          
    //   </div> */}
    //   {/* <div
    //     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    //     className='w-full h-full bg-center bg-cover duration-500'
    //   ></div> */}
    //   {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    //     BLa bla bla
    //     <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    //       {" "}
    //       DZTourism kda mena
    //     </span>
    //   </h1>
    //   <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    //     explore navigate etc etc whatever u like
    //   </p>
    //   <div className="flex justify-center my-10">
    //     <a
    //       href="Accommodation"
    //       className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
    //     >
    //       accommodation
    //     </a>
    //     <a href="#" className="py-3 px-4 mx-3 rounded-md border">
    //       Activity
    //     </a>
    //   </div> */}
      
        
      
    //   {/* <Search_bar/> */}
      
    // </div>
    <div className="bg-[url('/assets/pexels-raouf-bedrani-11377053.jpg')] bg-no-repeat bg-cover h-[80vh] -top-[10vh] relative text-black flex justify-center items-center">
      <div className="lg:w-2/3 mx-auto text-center">
          <h1 className="text-gray-700 text-4xl flex justify-center my-8 font-bold text-center">
              Find your dream <br />
              Travelling experience
          </h1>
          <p className="text-gray-700 text-xl flex justify-center my-8 text-center">
              By discovering the Algerian territories and natural wonders.
          </p>
          
            
            {/* <Typed
            
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
        
          <div className="flex justify-center gap-4">
              <div className="rounded-full border border-white flex items-center gap-4 p-1">
                  <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2" >
                      <a href="/Accommodation">Accommodation</a>
                  </button>
              </div>
              <div className="rounded-full border border-white flex items-center gap-4 p-1">
                  <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2">
                      <a href="/Activity">Activity</a>
                  </button>
              </div>
          </div>
      </div>
    </div>

  );
}

export default HeroDiv;
