import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";


const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
    <button style={{ backgroundColor: location.pathname === '/' ? 'tomato' : 'transparent' }} className="btn btn-ghost"><li><Link to='/'>Home</Link></li></button>
    <button style={{ backgroundColor: location.pathname === '/dashboard' ? 'tomato' : 'transparent' }} className="btn btn-ghost"><li htmlFor="dashboard-drawer"><Link to='/protectedRoute'>Protected Route</Link></li></button>

   
    {
            user ? <>
                <span><strong className="text-black">User : {user?.displayName}</strong></span>
                <button style={{ backgroundColor: location.pathname === '/logout' ? 'tomato' : 'transparent' }} onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <button style={{ backgroundColor: location.pathname === '/login' ? 'tomato' : 'transparent' }} onClick={handleLogOut}><li><Link to="/login">Login</Link></li></button>
            </>
        }
    
     </>
    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 bg-opacity-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Job Task</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    </> 
    );
};

export default Navbar;