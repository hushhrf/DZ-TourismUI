import React from 'react';

const FeaturedProperties = () => {
  const cardData = [
    {
      id: 1,
      imageurl: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name: "Aparthotel Stare Miasto",
      city: "Algiers",
      price: "$120",
      rating: "8.9",
      range: "Excellent"
    },
    {
      id: 2,
      imageurl: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name: "Aparthotel Stare Miasto",
      city: "Algiers",
      price: "$120",
      rating: "8.9",
      range: "Excellent"
    },
    {
      id: 3,
      imageurl: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name: "Aparthotel Stare Miasto",
      city: "Algiers",
      price: "$120",
      rating: "8.9",
      range: "Excellent"
    },
    {
      id: 4,
      imageurl: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name: "Aparthotel Stare Miasto",
      city: "Algiers",
      price: "$120",
      rating: "8.9",
      range: "Excellent"
    },
    
  ];

  return (
    <div>
        <h1 className="text-gray-700 text-4xl flex justify-center my-8 font-bold text-center">featured properties</h1>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 rounded-lg py-4">
      {cardData.map((item) => (
        <div key={item.id} className="flex-1 flex flex-col gap-4 border border-gray-200 rounded-lg shadow-md">
          <img
            src={item.imageurl}
            alt=""
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <span className="px-4 py-2 text-lg font-semibold">{item.name}</span>
          <span className="px-4 py-2">{item.city}</span>
          <span className="px-4 py-2 font-medium">{item.price}</span>
          <div className="flex items-center px-4 py-2">
            <button className="bg-blue-700 text-white px-3 py-1 font-bold rounded">{item.rating}</button>
            <span className="text-sm">{item.range}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default FeaturedProperties;
