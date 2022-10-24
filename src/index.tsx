import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'; 
import Footer from './Footer'; 
import MainContent from './MainContent'; 
import MCarousel from './Carousel';

ReactDOM.render(
  <React.StrictMode>
    <Header/> 
    <MainContent/> 
    {/* <App /> */}
    <MCarousel/>
    <Footer />  
  </React.StrictMode>,
  document.getElementById('root')
);
