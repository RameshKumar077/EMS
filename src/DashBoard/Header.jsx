import { useState } from "react"

export function Header({data,changeUser}){
   const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
   }
    return <>
        <div className="hello">Hello</div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">{data.firstName} 👋</a>

               <div className ="btn1">

                    <button onClick={logOut} type="submit">Log Out</button>
                </div>
            </div>
        </nav>
    </>
}