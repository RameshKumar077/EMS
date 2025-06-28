import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function Header1({ data, changeUser }) {
    const navigate=useNavigate()
    const logOut = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
        navigate('/login')
    }
    return (
        <>
           
            <nav className="flex items-center justify-between bg-gray-100 px-6 py-3 rounded shadow mb-6 mt-19 ml-5 ">
                <span className="text-lg font-bold">Hello, Admin 👋</span>
             
            </nav>
        </>
    )
}