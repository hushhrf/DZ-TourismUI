import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file


function Filter() {

  


  return (
    <div className="flex flex-col gap-0">
      <h1 className="text-gray-700 text-xl flex  my-8 font-bold ">
        Search results for 
      </h1>
      <div className="flex flex-col md:flex-row  md:gap-2">
        <div >
          <label htmlFor="city" className="text-xs">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs"
          />
        </div>
        {/* <div className="flex flex-col">
          <label htmlFor="property" className="text-sm">Property</label>
          <select name="property" id="property" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option value="">any</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div> */}
        <div >
          <label htmlFor="minPrice" className="text-xs">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs"
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="text-xs">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs"
          />
        </div>
        
        <div > 
          <button className="bg-[#6fcfdd] text-white rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
            <img src="/assets/search.png" alt="Icon" />
          </button>
      </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        {/* <div className="flex flex-col">
          <label htmlFor="type" className="text-sm">Type</label>
          <select name="type" id="type" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div> */}
        
      </div>
      
    </div>
  );
}

export default Filter;
