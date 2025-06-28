export function CompletedTask({ data }) {
    return (
        <div className="w-80 mx-4 my-2">
            <div className="bg-green-600 rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="bg-green-800 text-white px-2 py-1 rounded">{data.category}</h2>
                    <h4 className="text-gray-100">{data.taskDate}</h4>
                </div>
                <h5 className="text-lg font-semibold text-white">{data.taskTitle}</h5>
                <p className="text-gray-200 mb-4">{data.taskDescription}</p>
                <a href="#" className="bg-white text-green-700 px-3 py-1 rounded hover:bg-green-800 hover:text-white transition">Completed</a>
            </div>
        </div>
    );
}