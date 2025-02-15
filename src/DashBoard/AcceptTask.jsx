import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ChangeButton } from "./ChangeButton";

export function AcceptTask({data,datas}){
    const [flag,setFlag] = useState(true)
    const [userData,setUserData] = useContext(AuthContext)
    if (userData.find((e) => e.firstName==datas.firstName)){
        console.log(data.newTask)
    }
    return<>
        <div className="">
            <div className="card taskC">
                <div className="card-body taskB3">
                    <span className="d-flex justify-between"><h2>{data.category}</h2>
                        <h4>{data.taskDate}</h4>
                    </span>
                    <h5 className="card-title">{data.taskTitle}</h5>
                    <p className="card-text">{data.taskDescription}</p>
                    {
                        flag ? <a onClick={() => { setFlag(prev => !prev),datas++}} className="btn btn-primary">Accept Task</a> : <ChangeButton/>
                    }
                
                </div>
            </div>
        </div>
    </>
}