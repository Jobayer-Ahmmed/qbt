import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Summary from "../Pages/Summary/Summary";
import Ticket from "../Pages/Ticket/Ticket";
import MyTickets from "../Pages/MyTickets/MyTickets";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/summary",
                element:<Summary/>
            },
            {
                path:"/ticket",
                element:<Ticket/>
            },
            {
                path:"/my-tickets",
                element:<MyTickets/>
            }

        ]
    }
])

export default routes