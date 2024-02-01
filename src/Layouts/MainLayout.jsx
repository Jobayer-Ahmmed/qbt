import { Outlet } from "react-router-dom"



const MainLayout = () => {
  return (
    <div className="px:8 md:px-16 lg:px-20 my-myMargin">
        <Outlet/>
    </div>
  )
}

export default MainLayout