import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularCards from "./PopularCards";



const PopularDest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const cardData = [
    {
      id: 1,
      imageurl: "https://images.unsplash.com/photo-1580913709631-8de3edebfd2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxnZXJ8ZW58MHx8MHx8fDA%3D",
      name:"Algiers"
    },
    {
      id: 2,
      imageurl: "https://images.unsplash.com/photo-1549145177-238518f1ec1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RhbnRpbmV8ZW58MHx8MHx8fDA%3D",
      name:"Constantine"
    },
    {
      id: 3,
      imageurl: "https://imgs.search.brave.com/SmiWcg3xlGJdN32-qILqvVlSHmINkpg-zMmyT_P8ec8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDUz/NDgxNjA1L3Bob3Rv/L2FsZ2VyaWEtYW5u/YWJhLXByb3ZpbmNl/LXRoZS1jaXR5LWZy/b20tYWJvdmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTUz/SVJFUlVwdmdGN0pn/cWM1ZmR5RnY0TEFm/SkVvdmp4bWNxdzRM/dW9yN0k9",
      name:"Annaba"
    },
    {
      id: 4,
      imageurl: "https://imgs.search.brave.com/bdYJZkVyZL-aUG5oRMiV_xu_0rzdqio3MMbzlrgdlYQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ2LzU1Lzc1/LzM2MF9GXzU0NjU1/NzUxMF9iR3NPRmFB/RTg3Nk9UTjlHSFB3/dnc3ZmVkcjRkeDNQ/bS5qcGc",
      name:"Setif"
    },
    {
      id: 5,
      imageurl: "https://imgs.search.brave.com/pKy1XnU9mbeZBHUffk3579-o7FMHkdNoyQ_wYHQr6tw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E2L09yYW5fLV9h/ZXJpYWxfdmlldy5q/cGc",
      name:"Oran"
    },
  ]

  const popular_cards = cardData.map(item =>(
    <PopularCards url={item.imageurl} name={item.name} />
  ))

  return (
    <div className="w-full py-8 px-44">
      <h1 className="text-gray-700 text-4xl flex justify-center my-8 font-bold text-center">popular destinations</h1>
    <Carousel responsive={responsive} >
  {popular_cards}
</Carousel>
</div>
  );
};

export default PopularDest;
