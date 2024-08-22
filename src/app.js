import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
    
  );
};
const approuter = createBrowserRouter([{
  path:'/',
  element:<AppLayout/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/about',
      element:<AboutUs/>
    },
    {
      path:'/contact',
      element:<ContactUs/>
    },
    {
      path:'/restaurantmenu/:resid',
      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error/>
},
]
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);
