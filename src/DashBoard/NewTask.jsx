export function NewTask({ data }) {
    console.log(data);
    return (
        <div className="w-80">
            <div className="bg-blue-700 rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="bg-red-600 text-white px-2 py-1 rounded">{data.category}</h2>
                    <h4 className="text-gray-100">{data.taskDate}</h4>
                </div>
                <h5 className="text-lg font-semibold text-white">{data.taskTitle}</h5>
                <p className="text-gray-200 mb-4">{data.taskDescription}</p>
                <div className="flex gap-2">
                    <a href="#" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Mark As Completed</a>
                    <a href="#" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">Mark As Failed</a>
                </div>
            </div>
        </div>
    )
}