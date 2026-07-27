import Register from '@/features/auth/ui/pages/Register'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:'',
            element:<Register/>
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRoutes