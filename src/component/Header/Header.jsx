import React from 'react';

const Header = () => {
    return (
        <div className='mx-0 md:mx-12'>
            <div className="navbar bg-base-100 px-0">
                <div className=" flex md:flex-1">
                    <a className="btn btn-ghost text-lg md:text-2xl font-bold hover:bg-warning mr-2">Knowledge Cafe</a>

                </div>
                <div className='mr-2 ms-4 md:mr-12'>
                    <a className="btn btn-ghost px-1 md:px-4 text-lg md:text-xl hover:bg-warning">Home</a>
                    <a className="btn btn-ghost px-1 md:px-4 text-lg md:text-xl hover:bg-warning">Features</a>
                    <a className="btn btn-ghost px-1 md:px-4 text-lg md:text-xl hover:bg-warning">About</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control ">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto hidden md:block" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='border-2 border-base opacity-50 my-8 mx-6' />
        </div>
    );
};

export default Header;