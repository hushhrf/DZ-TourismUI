import { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Search_bar() {
  const [active, setActive] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white h-fit rounded-full border-solid border-[3px] border-primary absolute top-[420px] w-4/5 shadow-lg">
        <div className="flex flex-wrap gap-1 justify-between px-4 py-[10px]">
          <div>
            <div className="relative h-10 w-40 flex items-center">
              <FaLocationPin
                size={12}
                className="text-primary absolute top-0 bottum-0 left-2 z-10 h-full"
              />
              <input
                type="text"
                placeholder="Setif, Algeria"
                className=" rounded-md px-2 py-1 text-sm absolute w-full h-full pl-6 outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center items-center h-[40px] gap-1">
            <FaCalendar size={12} className="text-primary" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="cursor-pointer text-light "
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
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
                className="text-primary top-0 bottum-0 left-2 z-10 h-full"
              />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="text-light cursor-pointer"
              >
                {`${options.adult} adult . ${options.children} children . ${options.room} room`}
              </span>
              {openOptions && (
                <div className="absolute top-8 bg-white text-gray-500 rounded">
                  <div className="w-44 flex justify-between m-3">
                    <span> Adult </span>
                    <div className="flex items-center gap-3 text-xs text-black">
                      <button
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{options.adult}</span>
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
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{options.children}</span>
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
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{options.room}</span>
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
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
              Search
            </button>
        </div>
      </div>
    </div>
  );
}
