import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Header1 } from "./Header1";
import { Link } from "react-router-dom";
export function Admin(props) {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
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
        const updatedData = userData.map(elem => {
            
            if (asignTo === elem.firstName) {
                // console.log(newTask);
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
        setUserData(updatedData);
        setTaskTitle("");
        setTaskDate("");
        setTaskDescription("");
        setAsignTo("");
        setCategory("");
    };

    return (
        <>
            <Header1 changeUser={props.changeUser} />
            <div className='bg-blue-150'>
                
            <div className="flex flex-col items-center my-16 px-2 w-full">
                    <div className='text-2xl font-bold text-black-100'>Assign Task To The Employee</div>
                <form
                    onSubmit={submitHandler}
                    className=" rounded-lg shadow-lg p-8 w-full mb-10"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left column */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Task Title</label>
                                <input
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Task title"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Date</label>
                                <input
                                    value={taskDate}
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    type="date"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Assign To</label>
                                <input
                                    value={asignTo}
                                    onChange={(e) => setAsignTo(e.target.value)}
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Employee Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Category</label>
                                <input
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Eg. design, dev, etc"
                                    required
                                />
                            </div>
                        </div>
                        {/* Right column */}
                        <div className="flex-1 flex flex-col ">
                            <label className="block text-gray-700 font-semibold mb-2">Description</label>
                            <textarea
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
                                rows={8}
                                placeholder="Task description"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </form>
                <div className="w-full ">
                    <div className=" rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold text-center mb-4">Employee Details</h3>
                        <div className="grid grid-cols-5 gap-2 bg-red-400 text-white rounded mb-2 px-2 py-2">
                            <div className="font-semibold">Employee Name</div>
                            <div className="font-semibold">New Task</div>
                            <div className="font-semibold">Active Task</div>
                            <div className="font-semibold">Completed Task</div>
                            <div className="font-semibold">Failed Task</div>
                        </div>
                        {userData.map((elem) => (
                            <div
                                key={elem.email}
                                className="grid grid-cols-5  border-b border-gray-200 py-2 text-center text-gray-800"
                            >
                                <div className='mr-60'>{elem.firstName}</div>
                                <div className='mr-60'>{elem.taskCounts.newTask}</div>
                                <div className='mr-60'>{elem.taskCounts.active}</div>
                                <div className='mr-60'>{elem.taskCounts.completed}</div>
                                <div className='mr-60'>{elem.taskCounts.failed}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}