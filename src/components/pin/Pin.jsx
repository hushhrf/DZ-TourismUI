// import { Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";
// import { FaLocationPin } from "react-icons/fa6";

// function Pin({ item }) {
//   return (
//     <Marker position={[item.latitude, item.longitude]}>
//       <Popup>
//         <div className="flex gap-8 items-center">
//           <img src={item.img} alt="" className="w-26 h-20 object-cover rounded-md" />
//           <div className="flex flex-col justify-between">
//             <Link to={`/${item.id}`} className="text-lg font-semibold text-blue-600">{item.name}</Link>
//             <span><FaLocationPin/>{item.street_Address} </span>
//             {/* <b>$ {item.price}</b> */}
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// }

// export default Pin;

import { Marker, Popup } from "react-leaflet";
import "./pin.scss"
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.name}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;