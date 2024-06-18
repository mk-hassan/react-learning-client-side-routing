import { useState } from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <h1 className='logo'><Link to="/">Job Seeker</Link></h1>
          <ul className='links horizontal'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='about'>About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} /> {/* index == path='/' */}
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App