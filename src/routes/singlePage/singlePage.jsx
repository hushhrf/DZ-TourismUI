import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { BsStarFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

import Roomlistpage from "../RoomlistPage/Roomlistpage.jsx";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Map from "../../components/map/Map.jsx";

function SinglePage() {
  const { hotelData } = useLoaderData();
  // const [roomsData, setRoomsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   async function fetchRooms() {
  //     try {
  //       const response = await axios.get(`/api/v1/RoomType/SearchRoomTypeByHotel/1`);
  //       setRoomsData(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.error(`Error: ${err.response.status} - ${err.response.data}`);
  //         setError(`Error: ${err.response.status} - ${err.response.data}`);
  //       } else if (err.request) {
  //         console.error('Error: No response received from the server');
  //         setError('Error: No response received from the server');
  //       } else {
  //         console.error('Error:', err.message);
  //         setError(`Error: ${err.message}`);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchRooms();
  // }, [hotelData.id_Hotel]);
  //
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
      <div className="singlePage">
        <div className="details">
          <div className="wrapper">
            {/*<Slider images={hotelData.images}/>*/}
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1 className="text-black text-4xl flex justify-start my-8 font-serif uppercase text-left">
                    {hotelData.name}
                  </h1>
                  <div className="address">
                    <img src="/assets/pin.png" alt="Address" />
                    <span>{hotelData.street_Address}</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(hotelData.description) }} />
              </div>


              {/*<Roomlistpage rooms={roomData} />*/}
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">
            <p className="title">Location</p>
            <div className="mapContainer">
              <Map items={[hotelData]} />
            </div>
            <p className="title">Related information</p>
            <div className="listVertical">
              <div className="feature">
                <BsStarFill className="text-yellow-500" />
                <div className="featureText">
                  <span>{hotelData.star_Rating} stars</span>
                </div>
              </div>
              <div className="feature">
                <FaPhoneAlt className="text-green-500" />
                <div className="featureText">
                  <span>{hotelData.phone_number}</span>
                </div>
              </div>
              <div className="feature">
                <img src="/assets/fee.png" alt="Property Fees" />
                <div className="featureText">
                  <span>Property Fees</span>
                  <p>Bla bla</p>
                </div>
              </div>
            </div>
            <p className="title">Nearby Places</p>
            <div className="listHorizontal">
              <div className="feature">
                <img src="/assets/school.png" alt="School" />
                <div className="featureText">
                  <span>School</span>
                  <p>250m away</p>
                </div>
              </div>
              <div className="feature">
                <img src="/assets/pet.png" alt="Bus Stop" />
                <div className="featureText">
                  <span>Bus Stop</span>
                  <p>100m away</p>
                </div>
              </div>
              <div className="feature">
                <img src="/assets/fee.png" alt="Restaurant" />
                <div className="featureText">
                  <span>Restaurant</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SinglePage;



