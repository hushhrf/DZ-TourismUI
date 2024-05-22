import React, { useState, useEffect } from 'react';
import Search_bar from '../Search_bar';
import SearchAct from './SearchAct';

function ActHero() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    // Set showSearchBar to true after component mounts to trigger the animation
    setShowSearchBar(true);
  }, []);

  return (
    
    <div className="bg-[url('/assets/ram-kumar-qEbH5frgET4-unsplash.jpg')] bg-no-repeat bg-cover h-[100vh] -top-[10vh] relative text-black flex justify-center items-center">
      <div className="lg:w-2/3 mx-auto text-center">
        <div className={`transition-opacity duration-500 ${showSearchBar ? 'opacity-2000' : 'opacity-0'}`}>
          <h1 className="text-white text-4xl flex justify-center my-8 font-bold text-center">
              Find your dream <br />
              Travelling experience
          </h1>
          <p className="text-white text-xl flex justify-center my-8 text-center">
              By discovering the Algerian territories and natural wonders.
          </p>
          {/* Apply fade-in animation to the Search_bar component */}
          <div className={`transition-opacity duration-500 ${showSearchBar ? 'opacity-1000' : 'opacity-0'}`}>
            <SearchAct/>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default ActHero;