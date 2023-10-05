import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import Header from './components.js/Header';
import Body from './components.js/body';
import Contact from './components.js/contact';
import About from './components.js/about';
import Error from './components.js/error';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const Applayout = () => {
    return (
  <div className='app'>
     <Header/>
        <Body/>
  </div> 
    );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <Applayout/>,
  errorElement: <Error/>,
},

{
  path: "/about",
  element: <About/>,
},

{
  path: "/contact",
  element: <Contact/>,
},

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
