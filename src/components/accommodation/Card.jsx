// import { Link } from "react-router-dom";
// function Card({ item }) {

//   return (
//     <div className="flex gap-5">
//       <Link to={`/${item.id}`} className="flex-2 h-45 hidden md:flex">
//         <img src={item.img} alt="" className="w-40 h-35 object-cover rounded-lg" />
//       </Link>
//       <div className="flex-3 flex flex-col justify-between gap-3">
//         <h2 className="text-lg font-semibold text-gray-700 transition-colors duration-400 ease-in-out hover:text-black">
//           <Link to={`/${item.id}`} className="textContainer">
//             {item.name}
//           </Link>
//         </h2>
//         <p className="flex items-center gap-5 text-gray-600">
//           <img src="/assets/pin.png" alt="" className="w-4 h-4" />
//           <span>{item.street_Address}</span>
//         </p>
//         <p className="text-lg font-light px-2 py-1 rounded   ">
//           $ {item.price}
//         </p>
//         <div className="flex justify-between gap-10">
//           <div className="flex gap-20 text-sm">
//             <div className="flex items-center gap-5 bg-whitesmoke p-2 rounded">
//               <img src="/assets/bed.png" alt="" className="w-4 h-4" />
//               <span>{item.bedroom} bedroom</span>
//             </div>
//             <div className="flex items-center gap-5 bg-whitesmoke p-2 rounded">
//               <img src="/assets/bath.png" alt="" className="w-4 h-4" />
//               <span>{item.bathroom} bathroom</span>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <div className="border border-gray-300 rounded cursor-pointer p-2 flex items-center justify-center hover:bg-gray-200">
//               <img src="/assets/save.png" alt="" className="w-4 h-4" />
//             </div>
//             {/* <div className="border border-gray-300 rounded cursor-pointer p-2 flex items-center justify-center hover:bg-gray-200">
//               <img src="/assets/chat.png" alt="" className="w-4 h-4" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import { Link } from "react-router-dom";
import "./card.scss"
import { BsStarFill } from "react-icons/bs";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/api/v1/Hotel/getHotelById/${item.id_Hotel}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/api/v1/Hotel/getHotelById/${item.id_Hotel}`}>{item.name}</Link>
        </h2>
        <p className="address">
          <img src="/assets/pin.png" alt="" />
          <span>{item.street_Address}</span>
        </p>
        
        <p className="price"><Link>View deatils{item.price}</Link></p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              {/* <img src="/assets/bed.png" alt="" /> */}
              <BsStarFill className="text-yellow-400"/>
              <span>{item.star_Rating} Stars</span>
            </div>
            {/* <div className="feature">
              <img src="/assets/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div> */}
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/assets/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/assets/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
