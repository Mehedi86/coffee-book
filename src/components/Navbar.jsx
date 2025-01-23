import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar shadow-sm fixed z-50 backdrop-blur-xl bg-white/30">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    Coffee House
                </Link>
            </div>
            <div className="flex-none">

                <ul className="menu menu-horizontal px-1 gap-2">
                    <NavLink to="/" className={({ isActive }) => `btn btn-sm ${isActive ? 'text-white bg-amber-600' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/coffees" className={({ isActive }) => `btn btn-sm ${isActive ? 'text-white bg-amber-600' : ''}`}>
                        Coffees
                    </NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => `btn btn-sm ${isActive ? 'text-white bg-amber-600' : ''}`}>
                        Dashboard
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;