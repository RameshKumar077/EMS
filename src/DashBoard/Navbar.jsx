import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Employee from './Employee'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const Navbar = ({ data, changeUser,user,mail }) => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];
   
    const { email } = useParams();
    console.log("email from route:", email);
    
    const navigate = useNavigate();
    const location = useLocation();        // detects route changes
    const [isLogged, setIsLogged] = useState(
        () => !!localStorage.getItem('loggedInUser')   // lazy init
    );
    useEffect(() => {
        setIsLogged(!!localStorage.getItem('loggedInUser'));
    }, [location.pathname]);
    const [log, setLog] = useState(false);
    const login=()=>{
        navigate('/login');
        setIsMenuOpen(false)
    }
    const logOut = () => {
        console.log("click");
        localStorage.setItem('loggedInUser', '')
        changeUser('');
        setIsLogged(false);
        navigate('/');
        setIsMenuOpen(false)
        // setTimeout(() => {
        //     window.location.reload();
        // }, 100);
    }
    
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(ref.current.scrollTop > 10);
        };
      
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [showEmployeePage, setShowEmployeePage] = useState(false);
    
    const handleDashboardClick = () => {
        setShowEmployeePage(true);
        if (user == 'admin') navigate('/admin');
       if(user=='employee') navigate('/employee');
       
      };
    return (
        <>
           
            <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
                {/* {data && <Header data={data} changeUser={changeUser} />} */}
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={"https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </a>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    {/* { isLogged && <div onClick={handleDashboardClick} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        DashBoard
                   </div>} */}
      
                    {user && (
                        <Link
                            to={user === 'admin' ? '/admin' : `/employee/${encodeURIComponent(mail)}`}
                            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}
                        >
                            Dashboard
                        </Link>
                    )}

                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    {/* {!data && (
                        <button
                            onClick={login}
                            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500"
                        >
                            Login
                        </button>
                    )} */}
                    {isLogged? (<button
                        onClick={logOut}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                        Log Out
                    </button>) : (
                        <button
                            onClick={login}
                            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500"
                        >
                            Login
                        </button>
                    ) }
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

{user && (
                        <Link
                            to={user === 'admin' ? '/admin' : `/employee/${encodeURIComponent(mail)}`} onClick={() => setIsMenuOpen(false)}
                            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer  text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                        >
                            Dashboard
                        </Link>
                    )}

                    {isLogged ? (<button
                        onClick={logOut}

                        className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                    >
                        Log Out
                    </button>) : (
                        <button
                            onClick={login}
                                className={`bg-black text-white px-8 py-2.5 rounded-full ml-4  transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>
       {/* <div className="mt-17 ml-7">
        <h3>Hello,</h3>
          {data && <span className="text-lg font-bold ml-10">{data.firstName} 👋</span>}
       </div> */}
            {showEmployeePage && (
                <Employee data={data} changeUser={changeUser} />
            )}

            
        
        </>
  )
}

export default Navbar