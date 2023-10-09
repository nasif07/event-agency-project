import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userDefaultPicture from '../../assets/user.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);


//     const {photoURL
// } = user



    const handleLogOut = () => {
        logOut();
    }


    const items = <>
        <li><NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FCB41E] text-white underline" : ""
            }>Home</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FCB41E] text-white underline" : ""
            }
            to="/contact">Contact</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FCB41E] text-white underline" : ""
            }
            to="/login">Login</NavLink></li>
        <li><NavLink
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FCB41E] text-white underline" : ""
            }
            to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 px-16 max-w-[1600px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="text-2xl font-bold"><span className="text-[#FCB41E]">EVENT</span> AGENCY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <h1 className="mr-2 font-semibold text-lg">{user.displayName}</h1> : <h1></h1>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user ? <img src={`${user?.photoURL}`} />
                            : <img src={userDefaultPicture} />
                        }
                    </div>
                </label>
                {

                    user ?
                        <button onClick={handleLogOut} className="btn ml-4">Log out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;