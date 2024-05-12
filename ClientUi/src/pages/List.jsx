import React from 'react'
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import Navbar from '../components/Navbar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const List = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([new Date(), new Date()]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adult: "",
    children: "",
    room: "",
  });

  return (
    <div>
    <Navbar/>
    <header type="list" />
    <div className="flex flex-col items-center mt-20">
      <div className="w-full max-w-2xl flex gap-4">
        {/* List Search */}
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">Search</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Destination</label>
              <input
                placeholder="Where are you going?"
                type="text"
                className="input-field h-8 border-none p-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="date-range h-8 p-1 bg-white flex items-center cursor-pointer"
              >{`${format(date[0], "MM/dd/yyyy")} to ${format(
                date[1],
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Options</label>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Min price</span>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Per night"
                  />
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Max price</span>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Per night"
                  />
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="input-field"
                    placeholder="1"
                  />
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="input-field"
                    placeholder="0"
                  />
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-gray-600">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="input-field"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
            <button className="btn-primary w-full">Search</button>
          </div>
        </div>
        
        {/* List Result */}
        {/* <div className="flex-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default List;
