import { useState } from "react"
export function Header1({ data,changeUser }) {
    const logOut = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
    }
    return <>
        <div className="hello">Hello</div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Admin 👋</a>

                <div className="btn1">

                    <button onClick={logOut}type="submit">Log Out</button>
                </div>
            </div>
        </nav>
    </>
}