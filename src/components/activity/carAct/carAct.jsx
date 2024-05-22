import { Link } from "react-router-dom";
import "./cardAct.scss"
import { BsStarFill } from "react-icons/bs";

function CardAct({ item }) {
  return (
    <div className="card">
      {/* <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link> */}
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.name}</Link>
        </h2>
        <p className="address"><Link>{item.category} </Link></p>
        <p className="address">
          <img src="/assets/pin.png" alt="" />
          <span>{item.location}</span>
        </p>
        <p className="address">
          
          <span>{item.description}</span>
        </p>

        <p className="address">
          
          <span>Date: {item.date}</span>
        </p>
        
        <p className="price"><Link>Price: {item.price} DA</Link></p>
        
        <p className="address"><Link>Duration: {item.duration} days</Link></p>
        <p className="address"><Link>{item.capacity} person</Link></p>
        {/* <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/assets/bed.png" alt="" />
              <BsStarFill className="text-yellow-400"/>
              <span>{item.star_Rating} Stars</span>
            </div>
            <div className="feature">
              <img src="/assets/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/assets/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/assets/chat.png" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CardAct;
