import React from 'react'
import { 
  BrowserRouter,
  Route, 
  Routes 
} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/home/Home_Page'
import Properties from './pages/properties/Properties_Page';
import SellProperty from './pages/properties/Properties_List_Section/Sell_Property/Sell_Property';
import PropertyDescription from './pages/properties/Properties_List_Section/Property_Description/Property_Description';
import About from './pages/about/About_Page';
import ContactUs from './pages/contact-us/Contact_Us_Page';
import SignIn from './pages/sign-in/Sign_In_Page';
// import SignUp from './Pages/Sign_In/Sign_Up_Page';


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route path='properties' element={<Properties />} />
          <Route path='/properties/sell-property' element={<SellProperty />} />
          <Route path='/properties/property-description' element={<PropertyDescription />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='sign-in' element={<SignIn />} />
          {/* <Route path='sign-up' element={<SignUp />} /> */}
        </Route>
      </Routes>    
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter> 
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}


export default App
