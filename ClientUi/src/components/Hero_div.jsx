// import { useState } from "react";
// import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
// import { FaLocationPin, FaPerson } from "react-icons/fa6";

// export default function Main_div() {
//     const [active, setActive] = useState("Stays");

//     return (
//         <div className="container mx-auto px-6 pt-12">
//             <div className=" relative rounded-2xl lg:pb-32 lg:h-[70vh]">
//                 <div className="overflow-hidden relative h-full w-full">
//                     <img
//                         src="/assets/pic.jpg"
//                         alt=""
//                         className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl hoverImg"
//                     />
//                 </div>
//                 <div className="absolute top-0 bottom-0 left-0 right-0 h-fit">
//                     <h1 className="text-white text-4xl flex justify-center mt-16 font-bold lg:w-4/5 mx-auto text-center">
//                         Explore our beautiful algeria and enjoy its wonders
//                     </h1>
//                     <p className="flex justify-center text-white mt-4 px-6 text-center">
//                         Find and write about your experiences in our local territories
//                     </p>
//                 </div>
//                 <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
//                     <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
//                         <div className="lg:flex gap-4 gap-x-2">
//                             <div className="flex flex-wrap gap-x-16 w-full">
//                                 <button
//                                     onClick={() => setActive("Stays")}
//                                     className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
//                                         active === "Stays"
//                                             ? "text-black border-b-2 border-solid Dborder-black"
//                                             : "text-light"
//                                         }`}
//                                 >
//                                     Stays
//                                 </button>
//                                 <button
//                                     onClick={() => setActive("Activity")}
//                                     className={`rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
//                                         active === "Activity"
//                                             ? "text-black border-b-2 border-solid Dborder-black"
//                                             : "text-light"
//                                         }`}
//                                 >
//                                     Activity
//                                 </button>
//                             </div>
//                             <button classname="whitespace-pre flex items-center gap-2 bg-transparent outline-none border-none text-light">
//                              Last Searching
//                              <FaArrowRight />
//                             </button>
//                         </div>
//                         <div className="flex flex-wrap items-end gap-1 justify-between border-t border-solid py-4">
//                             <div>
//                                 <p className="text-light text-lg">Destination</p>
//                                 <div className="relative h-10 w-40 flex items-center">
//                                     <FaLocationPin size={12} className="text-primary absolute top-0 bottum-0 left-2 z-10 h-full"/>
//                                     <input type="text" 
//                                     placeholder="Setif, Algeria"
//                                     className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full pl-6 outline-none" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="text-light text-lg">Check in</p>
//                                 <div className="relative h-10 w-40 flex items-center">
//                                     <FaCalendar size={12} className="text-primary absolute top-0 bottum-0 left-2 z-10 h-full"/>
//                                     <input
//                                         type="date"
//                                         defaultValue="2024-02-12"
//                                         placeholder="Setif, Algeria"
//                                         className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full pl-6 outline-none"
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="text-light text-lg">Check out</p>
//                                 <div className="relative h-10 w-40 flex items-center">
//                                     <FaCalendar size={12} className="text-primary absolute top-0 bottum-0 left-2 z-10 h-full"/>
//                                     <input
//                                         type="date"
//                                         defaultValue="2024-02-12"
//                                         placeholder="Setif, Algeria"
//                                         className="bg-light1 rounded-md px-0 py-1 text-sm absolute h-full pl-6 outline-none"
//                                     />
//                                 </div> 
//                             </div>
//                             <div>
//                                 <p className="text-light text-lg">Check out</p>
//                                 <div className="relative h-10 w-40 flex items-center">
//                                     <FaPerson size={12} className="text-primary absolute top-0 bottum-0 left-2 z-10 h-full"/>
//                                     <input
//                                         type="text"
//                                         defaultValue="2024-02-12"
//                                         placeholder="1 Room, 2 Adults"
//                                         className="bg-light1 rounded-md px-0 py-1 text-sm absolute h-full pl-6 outline-none"
//                                     />
//                                 </div> 
//                             </div>
                               
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
const Hero_div = () => {
    return (
      <div className="bg-[url('/assets/pexels-krivec-ales-580151.jpg')] bg-no-repeat bg-cover h-[80vh] -top-[10vh] relative text-black">
          <div className="lg:w-2/3 mx-auto h-full flex flex-col justify-center">
              <h1 className="font-medium lg:text-5xl text-3xl lg:text-left text-center">
                  Find your dream <br />
                  Travelling experience
              </h1>
              <p className="lg:text-2xl text-lg lg:text-left text-center mt-6 mb-4">
               By discover the algerian territories and natural wonders.
              </p>
              <div className="flex lg:justify-start justify-center">
                  <span className="rounded-full border border-white flex flex-col items-center gap-4 p-1">
                      <button className="bg-white rounded-full text-black text-sm font-medium px-8 py-2 h-full">
                       View best offers
                      </button>
                  </span>
              </div>
          </div>
      </div>
      
    );
  };
  
  export default Hero_div
   