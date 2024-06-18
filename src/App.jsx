import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

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
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='help'>Help</NavLink></li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App