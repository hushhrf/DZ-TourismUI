import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ params }) => {

  try {


    const hotelRes = await apiRequest(`/api/v1/Hotel/getHotelById/${params.id}`);
    // const roomRes = await apiRequest(`/api/v1/RoomType/SearchRoomTypeByHotel/1`)


    return {
      hotelData: hotelRes.data
    };
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
};

// export const roomsPageLoader = async ({ params }) => {
//
//
//
//     const rooms = await apiRequest(`/api/v1/RoomType/SearchRoomTypeByHotel/${params.id}`);
//
//
//     return defer {
//       roomsRes: rooms,
//     };
//
// };
// Exporting the listPageLoader function for use in routing or data fetching
export const listPageLoader = async ({ request }) => {
  const query = new URL(request.url).searchParams.toString();
  const postPromise = apiRequest(`/api/v1/Search/getHotelByCity?${query}`);

  return defer({
    postResponse: postPromise,
  });
}

export const listPageLoaderAct = async ({ request }) => {
  // Extracting query parameters from the request URL
  const query = new URL(request.url).searchParams.toString();

  // Making an API request to fetch posts based on the query parameters
  const postPromise = apiRequest(`/api/v1/Search/getHotelByCity?${query}`);

  // Returning a deferred object containing the promise for the API response
  return defer({
    postResponse: postPromise,
  });
}

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  // const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    // chatResponse: chatPromise,
  });
};
