import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Coffee House</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <Link to="/">
                    <button className="btn">Home</button>
                    </Link>
                    <Link to="/coffees"><button className="btn">Coffees</button></Link>
                    <Link to="/dashboard"><button className="btn">Dashboard</button></Link>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;