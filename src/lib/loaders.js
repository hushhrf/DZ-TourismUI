import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

// Exporting the listPageLoader function for use in routing or data fetching
export const listPageLoader = async ({ request }) => {
  // Extracting query parameters from the request URL
  const query = new URL(request.url).searchParams.toString();

  // Making an API request to fetch posts based on the query parameters
  const postPromise = apiRequest(`/posts?${query}`);

  // Returning a deferred object containing the promise for the API response
  return defer({
    postResponse: postPromise,
  });
}

export const listPageLoaderAct = async ({ request }) => {
  // Extracting query parameters from the request URL
  const query = new URL(request.url).searchParams.toString();

  // Making an API request to fetch posts based on the query parameters
  const postPromise = apiRequest(`/posts?${query}`);

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
