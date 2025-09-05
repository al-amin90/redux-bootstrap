import App from "@/App";
import Login from "@/pages/Login";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [

            {
                path :'/users',
                element: <Users/>
            },
            {
                index: true,
                element: <Task/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default routes