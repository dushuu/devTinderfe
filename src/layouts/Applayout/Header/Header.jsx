import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
                    <span className="text-error">❤</span> devTinder
                </Link>
            </div>
            <div className="flex-none gap-4">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered input-sm w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-error text-white flex items-center justify-center">
                            <span>U</span>
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/connections">Connections</Link>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}