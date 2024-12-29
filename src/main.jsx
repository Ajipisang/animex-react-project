import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/home/home.jsx'
import Details from './components/pages/details/detailsindex.jsx'
import Discover from './components/pages/discover/discover.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/details/:id",
    element: <Details/>
  },
  {
    path : "/discover",
    element: <Discover/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
