import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Accommodation from "./routes/Accommodation"




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage"
import Activity from "./routes/Activity";
import ProfilePage from "./routes/profilePage/profilePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, listPageLoaderAct, profilePageLoader, singlePageLoader } from "./lib/loaders";
import ListPageAct from "./routes/ActivityListpage/ActListpage";
import Register from "./components/Authentication/Register.jsx";
import AccountActivation from "./components/Authentication/AccountActivation.jsx";
import Login from "./components/Authentication/Login.jsx";
import BookForm from "./components/bookingForm/BookForm.jsx";
import ActivityRegister from "./components/Authentication/ActivityRegister.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Accommodation",
          element:<Accommodation/>
        },
        {
          path:"/Activity",
          element:<Activity/>
        },
        {
          path:"/listAct",
          element:<ListPageAct/>,
          loader: listPageLoaderAct,
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
        {
          path:"/Register",
          element:<Register/>
        },
        {
          path:"/Activate-account",
          element:<AccountActivation/>
        },
        {
          path:"/Authenticate",
          element:<Login/>
        },
        {
          path:"/bookingForm",
          element:<BookForm/>
        },
        {
          path:"/ActivityRegister",
          element:<ActivityRegister/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;

  

  // return (
  //   <BrowserRouter>
  //    <Routes>
  //     <Route path="" element={<Home />}/>
  //     <Route path="/Accommodation" element={<Accommodation />}/>
  //     <Route path="/Hotels" element={<List />}/>
  //    </Routes>
  //   </BrowserRouter>
  // )


