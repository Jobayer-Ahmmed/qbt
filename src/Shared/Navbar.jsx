import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="text-lg flex justify-center gap-5 my-myMargin">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/my-tickets">My Tickets</NavLink>
    </div>
  )
}

export default Navbar