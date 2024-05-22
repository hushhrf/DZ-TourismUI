import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { CgScreen } from "react-icons/cg";
import { FaKitchenSet } from "react-icons/fa6";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.name}</h1>
                <div className="address">
                  <img src="/assets/pin.png" alt="" />
                  <span>{singlePostData.street_Address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Offered amenities</p>
          <div className="listVertical">
            <div className="feature">
              {/* <img src="/assets/utility.png" alt="" /> */}
              <CgScreen className=" bg-yellow-100" />
              <div className="featureText">
                <span>TV</span>
                <p>Television and netflix</p>
              </div>
            </div>
            <div className="feature">
              {/* <img src="/assets/pet.png" alt="" /> */}
              <FaKitchenSet className="bg-yellow-100"/>
              <div className="featureText">
                <span>Kitchen</span>
                <p>full occupied kitchen</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>bla bla</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/assets/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/assets/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/assets/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/assets/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/assets/chat.png" alt="" />
              Book now
            </button>
            <button>
              <img src="/assets/save.png" alt="" />
              Save 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
