import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Twitter, Sun, Moon } from "lucide-react"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const Header = () => {

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark")
      }
    }
  }, [darkMode]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black/70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-2xl dark:bg-white/30 dark:text-black ">
      <div className="px-4 py-4 flex justify-between items-center ">
        <div className="text-2xl font-bold">
          Magic<span className="text-blue-500">Face</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium ">
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">Home</Link>
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">About</Link>
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">Contact-Us</Link>
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">Privacy</Link>
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">Product</Link>
          <Link to='' className="text-white dark:text-black transition hover:text-blue-500 px-1">Careers</Link>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-0 m-0 bg-transparent border-none outline-none focus:outline-none "
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>



        {/* Mobile View  buttons*/}


        <div className="md:hidden ">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-0 m-0 bg-transparent border-none outline-none focus:outline-none pr-5 "
          >
            {darkMode ? <Sun size={20} className="w-6 h-6" /> : <Moon size={20} className="w-6 h-6" />}
          </button>

          <button className="p-0 m-0 bg-transparent border-none outline-none focus:outline-none " onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {/* Mobile Menu  */}
      <div className={`fixed top-22 right-0 h-screen w-1/2 bg-black/60 dark:bg-white/30 backdrop-blur-sm z-50 p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-2xl`}
      >
        <hr className="my-4 border-t border-gray-300" />

        <div className="flex flex-col space-y-4 pl-4">

          <Link to='' className="block hover:text-blue-400 dark:text-black text-slate-100">Home</Link>
          <Link to='' className="block hover:text-blue-400 dark:text-black text-slate-100">About</Link>
          <Link to='' className="block hover:text-blue-400 dark:text-black text-slate-100">Privacy</Link>
          <Link to='' className="block hover:text-blue-400 dark:text-black text-slate-100">Contact-Us</Link>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="fixed bottom-24 ">
          <p className="dark:text-black text-white mb-2 text-lg">Our Social Contacts</p>
          <div className="flex gap-4 items-center">
            <a href="https://facebook.com" className="bg-black hover:bg-slate-300  p-2 rounded-full "><Facebook className="text-gray-300 hover:text-black" /></a>
            <a href="https://facebook.com" className="bg-black hover:bg-slate-300  p-2 rounded-full "><Instagram className="text-gray-300 hover:text-black" /></a>
            <a href="https://facebook.com" className="bg-black hover:bg-slate-300  p-2 rounded-full "><Twitter className="text-gray-300 hover:text-black" /></a>
          </div>
        </div>
      </div>


    </header>
  )
};
export default Header;