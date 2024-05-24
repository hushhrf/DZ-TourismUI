import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import apiRequest from "../../lib/apiRequest";
import { FaWalking } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SearchAct() {
  const params = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date()); 
  const [openDate, setOpenDate] = useState(false);
  const [selectedType, setSelectedType] = useState(params.type || ""); 
  const [types, setTypes] = useState([]);
  const [query, setQuery] = useState({
    city: params.city || "",
    date: params.date || format(new Date(), "yyyy-MM-dd"),
    type: params.type || "",
  });

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await apiRequest.get("/types");
        setTypes(response.data);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };
    fetchTypes();
  }, []);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
    
  };

  return (
     
      <div className="flex justify-center">
        <div className="bg-white h-fit rounded-full border-solid border-[3px] border-gray-200 absolute top-[65vh] w-4/5 shadow-lg">
          <div className="flex flex-wrap gap-1 justify-between px-4 py-[10px]">
            <div>
              <div className="relative h-10 w-40 flex items-center">
                <FaLocationPin
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="text"
                  name="city"
                  value={query.city}
                  onChange={handleChange}
                  placeholder="Setif, Algeria"
                  className="rounded-md px-2 py-1 text-sm absolute w-full h-full pl-6 outline-none"
                />
              </div>
            </div>
            <div>
              <div className="relative h-10 w-40">
                <FaWalking
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <select
                  name="type"
                  value={query.type}
                  onChange={handleChange}
                  className="rounded-md px-2 py-0 text-sm absolute w-full h-full pl-6 pr-2 outline-none appearance-none bg-white text-gray-500"
                >
                  <option value="" disabled hidden>
                    Choose type
                  </option>
                  {types.map((type) => (
                    <option key={type.id} value={type.id} style={{ color: 'black' }}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center h-[40px] gap-1 relative">
              <FaCalendar size={12} className="text-primary" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="cursor-pointer text-light"
              >
                {date ? format(date, "MM/dd/yyyy") : "Choose Date"}
              </span>
              {openDate && (
                <Calendar
                  date={date}
                  onChange={(newDate) => {
                    setDate(newDate);
                    setQuery((prev) => ({ ...prev, date: format(newDate, "yyyy-MM-dd") }));
                    setOpenDate(false);
                  }}
                  className="absolute top-[48px] z-50"
                />
              )}
            </div>
            <Link 
            to={`/listAct?city=${query.city}&date=${query.date}&type=${query.type}`}>            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
              Search
            </button>
            </Link>

            
          </div>
        </div>
      </div>
    
  );
}
