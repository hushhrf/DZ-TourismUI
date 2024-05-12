import React, { useState, useEffect } from 'react';
import Search_bar from './Search_bar';

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
    <div className=' h-[650px] w-full m-auto pb-10 relative group'>
      <div className="absolute top-[250px] bottom-0 left-0 right-0 h-fit">
          <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
            Explore our beautiful algeria and enjoy its wonders
          </h1>
          <p className="flex justify-center text-white mt-4 px-6 text-center">
            Find and write about your experiences in our local territories
          </p>
        </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      <Search_bar/>
    </div>
  );
}

export default HeroDiv;
