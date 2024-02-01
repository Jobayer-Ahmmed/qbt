import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="px-8 md:px-16 lg:px-20 mb-myMargin">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
