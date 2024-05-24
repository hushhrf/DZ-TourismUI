import React, { useState, useEffect } from 'react';
import Search_bar from '../Search_bar';
import beachVid from '/public/assets/beachVid.mp4';

function AccHero() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    useEffect(() => {
        // Set showSearchBar to true after component mounts to trigger the animation
        setShowSearchBar(true);
    }, []);

    return (
        <div className="-top-[10vh] relative w-full h-screen">
            <video
                className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <div className={`transition-opacity duration-500 ${showSearchBar ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className="text-white text-4xl font-bold mb-4">
                        Find your dream <br />
                        Travelling experience
                    </h1>
                    <p className="text-white text-xl mb-4">
                        By discovering the Algerian territories and natural wonders.
                    </p>
                    {/* Apply fade-in animation to the Search_bar component */}
                    <div className={`transition-opacity duration-500 ${showSearchBar ? 'opacity-100' : 'opacity-0'}`}>
                        <Search_bar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccHero;
