import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './pages/Home'
import App from './App'
import './index.css'

//import store from './redux/store'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
        ] 
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/*<Provider store={store}>*/}
            <RouterProvider router={router} />
            {/*</Provider>*/}
        </QueryClientProvider>
    </React.StrictMode>
)