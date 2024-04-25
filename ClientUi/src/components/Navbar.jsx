// import { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdClose } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//     const navigate = useNavigate();
//     const [dropdown, setDropdown] = useState(false);
//     const showDropdown = () =>{ 
//       setDropdown(!dropdown);
//     };

//     return (
//         <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white">
//             <div className="container mx-auto lg:px-3 w-full">
//                 <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
//                     <div className="flex flex-col gap-y-4">
//                         <div className="flex items-center gap-x-2">
//                             <a className="font-medium tracking-wider transition-colors cursor-pointer" onClick={() => navigate("/")}>
//                               <img src='/assets/logo.png' alt="logo" className="w-20"/>
//                             </a>
//                         </div>
//                     </div>
//                     <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
//                         <a
//                          href="#"
//                          className="leading-normal no-underline text-black text-lg hover:text-black"
//                         >
//                          Home
//                         </a>
//                         <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">Activity</a>
//                         <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">Explore</a>
//                         <a href="#" className="leading-normal no-underline text-light text-lg hover:text-black">About us</a>
//                     </ul>
//                     <div className="flex gap-4 max-lg:hidden">
//                         <button className="bg-transparent rounded shadow h-12 px-6 outline-none text-light hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary">
//                          Sign In
//                         </button>
//                         <button className=" bg-primary rounded shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">
//                          Sign Up
//                         </button>
//                     </div>
//                     {dropdown ? (
//                         <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
//                             <MdClose />
//                         </div>
//                     ) : (    
//                         <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
//                             <HiMenuAlt3 />
//                         </div>
//                     )}
//                     </div>
//                     {dropdown && (
//                         <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
//                             <div className="w-full flex flex-col items-baseline gap-4">
//                                 <ul className="flex felex-col justify-center w-full">
//                                     <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Home</a>
//                                     <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Activity</a>
//                                     <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Explore</a>
//                                     <a href="#" className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">About us</a>
//                                 </ul>
//                             </div>
//                         </div>
//                 )}
//             </div>       
//         </nav>
//     );
// }     

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaPhone } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from 'react-icons/bs';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  const handleProfileClick = () => {
    navigate("/profile"); 
  };

  return (
    <nav className="sticky top-0 z-50 bg-[url('/assets/pexels-krivec-ales-580151.jpg')] bg-no-repeat lg:bg-cover">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
        <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center">
          <a className="font-medium tracking-wider transition-colors cursor-pointer" onClick={() => navigate("/")}>
            <img src='/assets/logo2.png' alt="logo" className="w-28"/>
          </a>
          <div className="flex items-center">
            <button className="cursor-pointer text-x1 leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none" onClick={() => setNavbarOpen(!navbarOpen)}>
              {navbarOpen ? <AiOutlineClose /> : <FaBars/>}
            </button>
          </div>  
        </div>
        <div className={"lg:flex flex-grow items-center lg:h-auto h-screen justify-center" + (navbarOpen ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
            <li className="py-2 flex text-black uppercase font-medium items-center leading-snug hover:text-[#5badbb] ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-2 flex text-black uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
              <NavLink to="/">About us</NavLink>
            </li>
            <li className="py-2 flex text-white uppercase font-medium items-center leading-snug">
              <button className="bg-[#6fcfdd] rounded-full px-4 py-1 hoverBtn flex items-center gap-2" onClick={handleProfileClick}>
                <BsPersonFill className="text-white text-2xl mr-1 cursor-pointer" />
              </button>
            </li> 
            <li className="py-2 flex text-white uppercase font-medium items-center leading-snug">
              <button className="bg-[#6fcfdd] rounded-full px-4 py-1 hoverBtn flex items-center gap-2" onClick={handleSignUpClick}>
                Sign up
              </button>
            </li> 
            <li className="py-2 flex text-white uppercase font-medium items-center leading-snug">
              <button className="bg-[#6fcfdd] rounded-full px-4 py-1 hoverBtn flex items-center gap-2" onClick={handleLoginClick}>
                Log in
              </button>
            </li>    
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;