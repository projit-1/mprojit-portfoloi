import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-slate-300 sticky top-0">
            <div className="flex-1">
                <NavLink className="btn btn-ghost normal-case text-xl" to='/'>M. Projit</NavLink>
            </div>
            <div class="flex-none">
                <div class="menu menu-horizontal p-0">
                    <NavLink className="mx-2" to='/'>Home</NavLink>
                    <NavLink className="mx-2" to='about'>About</NavLink>
                    <NavLink className="mx-2" to='resume'>Resume</NavLink>
                    <NavLink className="mx-2 mr-12" to='contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;