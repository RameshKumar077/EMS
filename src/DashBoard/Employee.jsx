import { Header } from "./Header"
import { NewTask } from "./NewTask"
import { AcceptTask } from "./AcceptTask"
import { CompletedTask } from "./CompletedTask"
import { FailedTask } from "./FailedTask"
import Navbar from './Navbar'

export default function Employee({ data, changeUser }) {
    return (
        <>
            <Header data={data} changeUser={changeUser} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-6">
                <div className="bg-pink-600 rounded-lg shadow p-6 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-white">{data.taskCounts.active}</h1>
                    <h2 className="text-xl text-white mt-2">New Task</h2>
                </div>
                <div className="bg-green-500 rounded-lg shadow p-6 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-white">{data.taskCounts.completed}</h1>
                    <h2 className="text-xl text-white mt-2">Completed Task</h2>
                </div>
                <div className="bg-blue-700 rounded-lg shadow p-6 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-white">{data.taskCounts.newTask}</h1>
                    <h2 className="text-xl text-white mt-2">Accepted Task</h2>
                </div>
                <div className="bg-fuchsia-700 rounded-lg shadow p-6 flex flex-col items-center">
                    <h1 className="text-4xl font-bold text-white">{data.taskCounts.failed}</h1>
                    <h2 className="text-xl text-white mt-2">Failed Task</h2>
                </div>
            </div>
            <div className="mt-16 px-6">
                <h3 className="text-center text-2xl font-semibold mb-6">Task Details</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                    {data.tasks.map((elem, idx) => {
                        
                        if (elem.active) return <AcceptTask key={idx} data={elem} datas={data} />;
                        if (elem.newTask) return <NewTask key={idx} data={elem} datas={data} />;
                        if (elem.completed) return <CompletedTask key={idx} data={elem} datas={data} />;
                        if (elem.failed) return <FailedTask key={idx} data={elem} datas={data} />;
                        return null;
                    })}
                </div>
            </div>
        </>
    )
}