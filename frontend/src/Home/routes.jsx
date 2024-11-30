import {createBrowserRouter} from 'react-router-dom'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import Dashboard from '../Dashboard/Dashboard'
import HomePage from '../Home/HomePage';
import User from '../Dashboard/User';
import Header from './Header';
import App from '../App';
import Introduction from './Introduction';
 const route=createBrowserRouter([

    {
        path:'/',
        element:<HomePage/>,

        children:[{
            path:'/',
            element:<Introduction/>,
            
        }
        ,
        {
            path:'/login',
            element:<Login/>
        }
        ,{
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        }
        ,{
            path:'/user/:username',
            element:<User/>
        }]
    }
])

export default route;