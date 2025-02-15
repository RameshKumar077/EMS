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
import { Footer } from './DashBoard/Footer'
function App() {
  
  const [user, setUser] = useState(null)
  const [loggedIn,setLoggedIn]=useState(null);
   useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData=JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedIn(userData.data)
    }
   },[])
  const [AuthData,setAuthData] = useContext(AuthContext)
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com'&&password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

    }else if(AuthData){
      const employee = AuthData.find((e) => e.email === email && e.password === password)
      if(employee){
        setUser('employee')
        setLoggedIn(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data:employee}))
       
      }
     
    }else {
      alert("Invalid Credentials")
    }
  }
  
  return <>
 {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin'&&<Admin changeUser={setUser}></Admin>}
    {user=='employee'&&<Employee data={loggedIn} changeUser={setUser}></Employee>}
    <Footer></Footer>
   {/* <Employee></Employee> */}
   {/* <Admin></Admin> */}
  </>
}

export default App
