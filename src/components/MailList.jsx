import React from 'react';

const MailList = () => {
    return (
      <div className="w-full my-10 bg-[#07253f] text-white flex flex-col items-center gap-4 p-10">
        <h1 className="text-3xl font-bold">Save time, save money!</h1>
        <span className="text-lg">Sign up and we'll send the best deals to you</span>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full md:w-64 h-12 px-4 rounded-md text-black border-none focus:outline-none"
          />
          <button className="w-full md:w-auto h-12 bg-blue-700 px-2 text-white font-light rounded-md cursor-pointer transition duration-300 hover:bg-blue-800 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default MailList;
  