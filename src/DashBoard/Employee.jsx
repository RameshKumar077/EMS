import { Header } from "./Header"
import { NewTask } from "./NewTask"
import { AcceptTask } from "./AcceptTask"
import {CompletedTask} from "./CompletedTask"
import {FailedTask}  from "./FailedTask"
import { ChangeButton } from "./ChangeButton"
export default function Employee({data,changeUser}) {
    
    return <>
        
      <Header data={data} changeUser={changeUser}></Header>
        <div className="grid  d-flex flex-wrap garrage">
            <div className="g-col-6"><div className="card box" >      
                <div className="card-body box1">
                    <h1 className="hell">{data.taskCounts.active}</h1>
                    <h2 className="hell">New Task</h2>
                </div>
                    
            </div></div>
            <div className="g-col-6 "><div className="card box">
                
                    <div className="card-body box2">
                    <h1 className="hell">{data.taskCounts.completed}</h1>
                    <h2 className="hell">Completed Task</h2>
                    </div>
            </div></div>

            <div className="g-col-6"><div className="card box">
               
                    <div className="card-body box3">
                    <h1 className="hell">{data.taskCounts.newTask}</h1>
                    <h2 className="hell">Accepted Task</h2>
                    </div>
            </div></div>
            <div className="g-col-6"><div className="card box">
        
                    <div className="card-body box4">
                    <h1 className="hell">{data.taskCounts.failed}</h1>
                    <h2 className="hell">Failed Task</h2>
                    </div>
            </div></div>
        </div>

    {/* task list */}
  
        
        <div className="details">
            <h3 className="stats">Task Details</h3>
        <div className=" task d-flex flex-wrap">
            
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} datas={data}></AcceptTask>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem} datas={data} />
                }
                if(elem.completed){
                    return <CompletedTask key={idx} data={elem} datas={data}></CompletedTask>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem} datas={data}></FailedTask>
                }
            })}
           
            
            
            </div> 
            
        </div>
    </>
}