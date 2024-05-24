import { Link } from "react-router-dom";
import "./CardRoom.scss";
import { BsStarFill } from "react-icons/bs";

function CardRoom({ item, onBook }) {
  const firstRoom = item.room[0]; // Access the first room in the array

  return (
      <div className="card">
        <div className="textContainer">
          <h2 className="title">
            {item.name}
          </h2>
          <p className="address">
            <Link to={`/room/${item.id_Room_Type}`}>{item.description}</Link>
          </p>
          <div className="flex items-center gap-5 bg-whitesmoke p-2 rounded">
            <img src="/assets/bed.png" alt="bed icon" className="w-4 h-4" />
            <span>{item.bed_Type} bedroom</span>
          </div>
          {firstRoom && (
              <div className="room-details">
                <p className="capacity">Capacity: {firstRoom.capacity}</p>
                {!firstRoom.availability_status && (
                    <p className="availability-status" style={{ color: 'red' }}>
                      This room is currently unavailable.
                    </p>
                )}
              </div>
          )}
          <p className="Book">
            <span>{item.price ? `${item.price} DA` : 'Price not available'}</span>
          </p>
          <p className="price">
            {firstRoom && (
                <button onClick={() => onBook(firstRoom.roomId)}>Book Now</button>
            )}
          </p>
        </div>
      </div>
  );
}

export default CardRoom;



