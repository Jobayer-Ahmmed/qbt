import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",


            },

        ]
    }
])

export default routes