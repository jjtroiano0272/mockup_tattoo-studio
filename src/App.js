import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
// React-bootstrap components
import Button from 'react-bootstrap/Button';

import 'font-awesome/css/font-awesome.min.css';

// TODO: Navbar shows up AFTER scroll
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 300) {
//     $('.navbar-fixed-top').addClassName('opaque');
//   } else {
//     $('.navbar-fixed-top').removeClassName('opaque');
//   }
// });
function App() {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );

  const toggleDarkMode = () => {
    localStorage.setItem('DARK_MODE', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode);
  }, [darkMode]);

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
