import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-12 mt-3'>
            <h2 className='text-4xl font-bold'>Recipe Calories</h2>

            <ul className='flex list-none text-center gap-8 text-2xl text-gray-600 cursor-pointer'>
                <li>Home</li>
                <li>Recipies</li>
                <li>About</li>
                <li>Search</li>
            </ul>

            <div className='flex mx-4 gap-4'>
                <div className='flex items-center bg-slate-600 p-2 rounded-lg'>
                    <input className='border-0 bg-transparent p-1 outline-0 text-2xl w-56' type="text" placeholder='Search' />
                    <FaSearch className='text-3xl cursor-pointer' />
                </div>

                <button className='text-4xl bg-emerald-400 rounded-2xl p-1 cursor-pointer'><CgProfile /></button>
            </div>

        </div>
    );
};

export default Navbar;