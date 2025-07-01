import { createBrowserRouter } from "react-router";
import App from "../App"
import Task from "../pages/task"
import User from "../pages/user"


const router = createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:"task",
                Component:Task
            },
            {
                path:"user",
                Component:User
            },
        ]
    }, 
])

export default router