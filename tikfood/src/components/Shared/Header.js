import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/bg.png';

const Header = () => {
    return (
        <div>
            {/* <h2>Header Section</h2> */}
            <div className="navbar bg-base-100 px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='text-md font-semibold uppercase'>Home</Link></li>
                            <li><Link to='/dashboard' className='text-md font-semibold uppercase'>Dashboard</Link></li>
                            <li><Link to='/reservation' className='text-md font-semibold uppercase'>Reservation</Link></li>
                            <li><Link to='/gallery' className='text-md font-semibold uppercase'>Gallery</Link></li>
                            <li><Link to='/about' className='text-md font-semibold uppercase'>About US</Link></li>
                            <li><Link to='/register' className='text-md font-semibold uppercase'>Register</Link></li>
                        </ul>
                    </div>
                    {/* <Link to='' className="btn btn-ghost normal-case text-xl">TikFood</Link> */}
                    <Link to='' className=""><img className='w-max-80 w-min-64' src={logo} alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='text-md font-semibold uppercase'>Home</Link></li>
                        <li><Link to='/dashboard' className='text-md font-semibold uppercase'>Dashboard</Link></li>
                        <li><Link to='/reservation' className='text-md font-semibold uppercase'>Reservation</Link></li>
                        <li><Link to='/gallery' className='text-md font-semibold uppercase'>Gallery</Link></li>
                        <li><Link to='/about' className='text-md font-semibold uppercase'>About US</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/register'><button className='btn hidden lg:block'>Register</button></Link>
                    <label tabIndex={1} htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;