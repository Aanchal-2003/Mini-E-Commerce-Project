import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Details from './pages/Details'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:slug?",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/product/details/:id",
          element: <Details />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
