import { useContext,useState ,useEffect} from "react";
import { AuthContext } from "../context/AuthProvider";
import { Header1 } from "./Header1";
export function Admin(props){
    const [userData,setUserData] = useContext(AuthContext)
    
    const[taskTitle,setTaskTitle]=useState('')
    const[taskDescription,setTaskDescription]=useState('')
    const[taskDate,setTaskDate]=useState('')
    const[asignTo,setAsignTo]=useState('')
    const[category,setCategory]=useState('')
    const[task,setTask]=useState({})
    //const [userData, setUserData] = useContext(AuthContext)
    
    const submitHandler = (e) => {
        e.preventDefault();

        // Create the new task object
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: true,
            newTask: true,
            failed: false,
            completed: false
        };

        // Update the task state
        setTask(newTask);

        // Update the userData with the new task
        const updatedData = userData.map(elem => {
            if (asignTo === elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                };
            }
            return elem;
        });

        // Update the userData state
        setUserData(updatedData);

        console.log(updatedData);
        setTaskTitle("")
        setTaskDate("")
        setTaskDescription("")
        setAsignTo("")
        setCategory("")
    };
    
    return <>
    <Header1 changeUser={props.changeUser}></Header1>
  
        <div className="row adminC">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className=" adminF">
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput" className="form-label">Task Title</h4>
                        <input value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)}}type="text" className="form-control" placeholder="Enter Task title"/>
                    </div>
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput" className="form-label">Date</h4>
                        <input value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} type="date" className="form-control" placeholder="Enter Task title" />
                    </div>
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput" className="form-label">Assign To</h4>
                        <input value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }} type="text" className="form-control" placeholder="Enter Employee Name" />
                    </div>
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput" className="form-label">Category</h4>
                        <input value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} type="text" className="form-control" placeholder="Eg. design, dev, etc" />
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className=" adminF">
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput" className="form-label">Description</h4>
                        <textarea value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }} className="form-control" cols="30" rows="10" placeholder="Example input placeholder"/>
                    </div>
                    <div className="mb-3">
                        <h4 htmlFor="formGroupExampleInput2" className="form-label"></h4>
                        <div className="Fbtn">
                                <button onClick={(e) => {
                                    submitHandler(e)
                                }} className="form-contro" >Create Task</button></div>
                    </div>
                </div>
            </div>
           
        </div>
   
        <div className="menu bg-[#1c1c1c1c]">
            <div><h3 className="stats">Employee Details</h3></div>
            <div className="d-flex justify-between menu1">
                {/* <h5 className="px-9 w-1/5 bg-red-400">Employee Name</h5>
                <h5 className='w-1/5 bg-red-400'>New Task</h5>
                <h5 className="right1 w-1/5 bg-red-400">Active Task</h5> */}
                <h5 className="right1 w-1/5 bg-red-400 ">Employee Name</h5>
                <h5 className="right1 w-1/5 bg-red-400 ">New Task</h5>
                <h5 className="right1 w-1/5 bg-red-400 ">Active Task</h5>
                <h5 className="right1 w-1/5 bg-red-400">Completed Task</h5>
                <h5 className="right1 w-1/5 bg-red-400 ">Failed Task</h5>
               
            </div>
            {userData.map(function(elem){
                return <>
                <div>
                       
                    <div className="d-flex justify-between menu1">
                    <h5 className="px-9 w-1/5 text-white" key={elem.firstName}>{elem.firstName}</h5>
                    <h5 className="w-1/5 text-white" key={new Date()}>{elem.taskCounts.newTask}</h5>
                    <h5 className="right1 w-1/5 text-white" key={elem.password}>{elem.taskCounts.active}</h5>
                    <h5 className="right1 w-1/5 text-white" key={elem.id}>{elem.taskCounts.completed}</h5>
                    <h5 className="right1 w-1/5 text-white" key={elem.email}>{elem.taskCounts.failed}</h5>
                </div>
                    </div>
                </>
            })}
        </div>
    </>
}