import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Employee from './DashBoard/Employee'
import { Admin } from './DashBoard/Admin'
import { useEffect } from 'react'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import {Footer} from './DashBoard/Footer'
import {Footer1} from './DashBoard/Footer1'
import Navbar from './DashBoard/Navbar'
import { Route, Routes, useParams } from 'react-router-dom'
import Hero from './DashBoard/Hero'
import { useNavigate } from 'react-router-dom';
import (useParams)
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loggedIn,setLoggedIn]=useState(null);
  
  const [AuthData,setAuthData] = useContext(AuthContext)
  const[mail,setMail]=useState(null);
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com'&&password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      navigate('./admin')

    }else if(AuthData){
      const employee = AuthData.find((e) => e.email === email && e.password === password)
      if(employee){
        setMail(employee.email);
        setUser('employee')
        setLoggedIn(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data:employee}))
        navigate(`/employee/${encodeURIComponent(employee.email)}`);

      }
     
    }else {
      alert("Invalid Credentials")
    }
  }
      
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedIn(userData.data);
      if (userData.role === 'employee' && userData.data?.email) {
        setMail(userData.data.email);}
    }
  }, [])

  return <>
    <Navbar data={loggedIn} changeUser={setUser} user={user} mail={mail}></Navbar>
 {/* {!user?<Login handleLogin={handleLogin}/>:''}
    {user == 'admin'&&<Admin changeUser={setUser}></Admin>}
    {user=='employee'&&<Employee data={loggedIn} changeUser={setUser}></Employee>} */}
   
    {/* {!user ? <Login handleLogin={handleLogin} user={user}/> : ''} */}

      <Routes>
        <Route path='/' element={<Hero/>}/>
     <Route path="/login" element={<Login handleLogin={handleLogin} user={user} />} />
      {/* <Route path='/login' element={!user ? <Login handleLogin={handleLogin} />:''}/> */}
      
      {user == 'admin'&& <Route path='/admin' element={<Admin changeUser={setUser}></Admin>}/>}
      {user == 'employee' && <Route path="/employee/:email" element= { <Employee data={loggedIn} changeUser={setUser}></Employee>}/>}
    </Routes>
  

   <Footer1/>
  </>
}

export default App
