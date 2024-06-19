import { Link, NavLink, Outlet } from 'react-router-dom'

// pages
import LocationTracker from './components/LocationTracker';

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <h1 className='logo'><Link to="/">Job Seeker</Link></h1>
            <ul className='links horizontal'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='about'>About</NavLink></li>
              <li><NavLink to='careers'>Careers</NavLink></li>
              <li><NavLink to='help'>Help</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <LocationTracker />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App