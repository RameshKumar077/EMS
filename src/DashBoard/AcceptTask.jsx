import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ChangeButton } from "./ChangeButton";

export function AcceptTask({ data, datas }) {
    const [flag, setFlag] = useState(true);
    const [userData] = useContext(AuthContext);

    return (
        <div className="w-80 mx-4 my-2">
            <div className="bg-fuchsia-600 rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="bg-fuchsia-800 text-white px-2 py-1 rounded">{data.category}</h2>
                    <h4 className="text-gray-100">{data.taskDate}</h4>
                </div>
                <h5 className="text-lg font-semibold text-white">{data.taskTitle}</h5>
                <p className="text-gray-200 mb-4">{data.taskDescription}</p>
                {flag ? (
                    <a
                        onClick={() => setFlag((prev) => !prev)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition cursor-pointer"
                    >
                        Accept Task
                    </a>
                ) : (
                    <ChangeButton />
                )}
            </div>
        </div>
    );
}