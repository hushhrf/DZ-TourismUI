import { useState } from "react"
import { FaHotel } from "react-icons/fa"
import { GiMountains } from "react-icons/gi";

export default function Search_bar (){
 const[active, setActive] = useState(false);

 



  return (
    <div className="max-w-[2000px] mx-auto relative">
        <div className="w-full h-full">
            <p className="xl:text-[20rem] lg:text-[20rem] absolute top-0 left-0 w-full text-center z-[-1] text-gray font-semibold opacity-10">DZTourism</p>
        </div>
        <div className="px-20 lg:mt-0 mt-0">
            <div className="bg-white shadow-xl py-10 relative -top-20 z-10">
                <div className="flex lg:gap-x-4 gap-x-2 absolute -top-10">
                    <button onClick={() =>setActive("Hotel")} className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-11 lg:w-40 px-4 text-base cursor-pointer ${
                        active ==="Hotel" ? "bg-primary text-white" : "bg-white"
                    }`}>
                        <FaHotel size={15} /> Hotel
                    </button>
                    <button onClick={() =>setActive("Activity")} className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-11 lg:w-40 px-4 text-base cursor-pointer ${
                        active ==="Activity" ? "bg-primary text-white" : "bg-white"
                    }`}>
                        <GiMountains size={15} /> Activity
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}

