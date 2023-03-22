import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-left p-5">
                {/* <!-- Page content here --> */}
                <h2 className="text-3xl font-bold mb-2 text-green-600">Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-100 rounded-t-lg text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>All Menu</Link></li>
                    <li><Link to='/dashboard/make-menu'>Make Menu</Link></li>
                    <li><Link to='/dashboard/update-menu'>Update Menu</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;