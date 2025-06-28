import { useState } from "react"

export function Header({ data, changeUser }) {
    const logOut = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
    }
    return (
        <>
            <div className="mt-19 ml-5 text-xl font-semibold">
            <nav className="flex items-center justify-between bg-gray-100 px-6 py-3 rounded shadow mb-6">
                <span className="text-lg font-bold">Hello, {data.firstName} 👋</span>
                
            </nav>
            </div>
        </>
    )
}