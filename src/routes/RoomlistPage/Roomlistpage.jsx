import React from 'react';
import "./Roomlistpage.scss";
import CardRoom from "../../components/Room/CardRoom";

function Roomlistpage({}) {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <h1 className="text-gray-700 text-xl flex my-8 font-bold">Rooms</h1>
          {rooms.map((item) => (
            <CardRoom key={item.id} item={item}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roomlistpage;

