import React from 'react'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

import { Home, About, Contact, Projects } from './pages';


const App = () => {
  return (
    <div>
     <main className='bg-slate-300/20'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
     </main>
    </div>
  )
}

export default App