import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sign_In_Navbar from "./Navbar/Sign_In_Navbar";
import Footer from "./Footer/Footer";


export default function Layout() {

  const location = useLocation();
  const [renderNav, setRenderNav] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up")
      setRenderNav(true);
  
    else setRenderNav(false);

  }, [location.pathname])


  return (
    <>
      {renderNav ? <Sign_In_Navbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </>
  )
}