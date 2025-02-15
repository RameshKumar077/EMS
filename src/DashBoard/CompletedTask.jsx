export function CompletedTask({data}){
    return <>
        <div>
            <div className="card taskC">
                <div className="card-body taskB2">
                    <span className="d-flex justify-between"><h2 className="last">{data.category}</h2>
                        <h4>{data.taskDate}</h4>
                    </span>
                    <h5 className="card-title">{data.taskTitle}</h5>
                    <p className="card-text">{data.taskDescription}</p>
                    <a href="#" className="btn btn-success">Completed</a>
                </div>
            </div>
        </div>
    </>
}