import { ActData } from "../../lib/dummydata";
import "./ActListpage.scss";
import Filter from "../../components/filter/Filter"

import Map from "../../components/map/Map";
import Card from "../../components/accommodation/Card";
import CardAct from "../../components/activity/carAct/carAct";

function ListPageAct() {
  const data = ActData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        {/* <Filter/> */}
        <h1 className="text-gray-700 text-xl flex  my-8 font-bold ">
        Search results for 
        </h1>
        {data.map(item=>(
          <CardAct key={item.id} item={item}/>
        ))}
      </div>
    </div>
    {/* <div className="mapContainer">
      <Map items={data}/>
    </div> */}
  </div>;
}

export default ListPageAct;