import { createContext ,useState,useEffect} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext=createContext();
export function AuthProvider({children}){
    const [userData,setUserData]=useState(null)
     useEffect(()=>{
        setLocalStorage()
         const { employees } = getLocalStorage();
         setUserData(employees)
     },[])
    return<>
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>{children} </AuthContext.Provider>
    </div>
    </>
}