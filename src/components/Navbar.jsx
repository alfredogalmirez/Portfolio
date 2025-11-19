import { NavLink } from "react-router-dom"
import { FaMoon, FaSun } from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    console.log("darkMode before:", darkMode);
  }

  const linkClass = ({ isActive }) =>
    isActive ? "text-neutral-900 dark:text-white font-semibold border-b-2 border-neutral-900 dark:border-white" : "hover:text-black transition"

  return (
    <nav className="w-full py-4 px-8 bg-slate-50 dark:bg-neutral-900 shadow-sm dark:shadow-neutral-800 transition">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <NavLink to='/' className="text-2xl font-bold text-neutral-900 dark:text-white">\AGA/</NavLink>

        <div className="flex space-x-8 text-neutral-700 dark:text-neutral-300 font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition">{darkMode ? (<FaSun className='text-yellow-400' />) : (<FaMoon className='text-neutral-900 dark:text-white' />)}</button>
      </div>
    </nav >
  )
}

export default Navbar