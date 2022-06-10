import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const manuitem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/aboutme'>About Me</NavLink></li>
        <li><NavLink to='/contactme'>Contact Me</NavLink></li>
    </>

    return (
        <div class="navbar bg-slate-700">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuitem}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost text-white normal-case text-xl">PRITOM DAS</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">

                    {manuitem}
                </ul>
            </div>
            <div class="navbar-end">
                <button
                    class="btn btn-outline">
                    <a className='text-white' href={require("../img/PRITOM_DAS_JUINOR_WEB_DEVELOPER.pdf")} download="Pritom_Resume">Download Resume</a>
                </button>

            </div>
        </div>
    );
};

export default Navbar;