import React from 'react';
import {  BrowserRouter as Router,
          Route,
          Routes
        } from 'react-router-dom';

import { Home, About, Contact } from './pages';
import { Nav } from './layout';
import { Footer } from './layout';

function App() {
  return (
    <div className='flex flex-col h-screen'> 
    <Router>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home /> }/> 
        <Route path="/about" element={<About /> }/>
        <Route path="/contact" element={ <Contact />}/>
      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;