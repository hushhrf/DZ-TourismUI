import { useState } from "react";
import { FaCalendar, FaLocationPin, FaPerson } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [openDate, setOpenDate] = useState(false);
  const [query, setQuery] = useState({
    city: "",
    CheckIn: format(new Date(), "yyyy-MM-dd"),
    CheckOut: format(new Date(), "yyyy-MM-dd"),
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const handleOption = (name, operation) => {
    setQuery((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (item) => {
    setDate([item.selection]);
    setQuery((prev) => ({
      ...prev,
      CheckIn: format(item.selection.startDate, "yyyy-MM-dd"),
      CheckOut: format(item.selection.endDate, "yyyy-MM-dd"),
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white h-fit rounded-full border-solid border-[3px] border-gray-200 absolute top-[420px] w-4/5 shadow-lg">
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
          <div className="flex justify-center items-center h-[40px] gap-1">
            <FaCalendar size={12} className="text-primary" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="cursor-pointer text-light"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-[48px]"
              />
            )}
          </div>
          <div>
            <div className="relative h-10 flex items-center gap-1">
              <FaPerson
                size={12}
                className="text-primary top-0 bottom-0 left-2 z-10 h-full"
              />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="text-light cursor-pointer"
              >
                {`${query.adult} adult . ${query.children} children . ${query.room} room`}
              </span>
              {openOptions && (
                <div className="absolute top-8 bg-white text-gray-500 rounded">
                  <div className="w-44 flex justify-between m-3">
                    <span> Adult </span>
                    <div className="flex items-center gap-3 text-xs text-black">
                      <button
                        disabled={query.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{query.adult}</span>
                      <button
                        onClick={() => handleOption("adult", "i")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-44 flex justify-between m-3">
                    <span> Children </span>
                    <div className="flex items-center gap-3 text-xs text-black">
                      <button
                        disabled={query.children <= 0}
                        onClick={() => handleOption("children", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{query.children}</span>
                      <button
                        onClick={() => handleOption("children", "i")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-44 flex justify-between m-3">
                    <span> Room </span>
                    <div className="flex items-center gap-3 text-xs text-black">
                      <button
                        disabled={query.room <= 1}
                        onClick={() => handleOption("room", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{query.room}</span>
                      <button
                        onClick={() => handleOption("room", "i")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Link
            to={`/list?city=${query.city}&CheckIn=${query.CheckIn}&CheckOut=${query.CheckOut}&adult=${query.adult}&children=${query.children}&room=${query.room}`}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
