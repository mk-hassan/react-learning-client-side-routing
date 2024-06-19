import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// main component
import App from './App.jsx'
import Help from './pages/Help.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Careers from './pages/Careers.jsx'
import CareersList from './components/CareersList.jsx'
import CareerDetails from './components/CareerDetails.jsx'
import CareersError from './components/CareersError.jsx'

// actions & loaders
import submitContactForm from './actions/submitContactFormAction.js'
import careersListLoader from './actions/careersListLoader.js'
import careerDetailsLoader from './actions/careerDetailsLoader.js'

// styling files
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} action={submitContactForm} />
      </Route>
      <Route path='careers' element={<Careers />} errorElement={<CareersError />}>
        <Route
          index
          element={<CareersList />}
          loader={careersListLoader}
        />
        <Route
          path=':careerId'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)