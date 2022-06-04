import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

import Sidebar from './components/sidebar/sidebar.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import ScrollToTop from './scroll-to-top';


import './App.css';


const App = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <ScrollToTop/>      
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar}/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/sign-in' element={ <SignIn/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
