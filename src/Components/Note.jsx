export function Note() {
    return (
        <div className=" rounded-lg p-4 mb-6 flex flex-col items-center text-center shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Note</h3>
            <p className="text-gray-700 mb-1">In this application data is stored on localStorage, to access form use given data.</p>
            <p className="text-gray-700 mb-1">
                To login as Admin - Email: <span className="font-mono">admin@me.com</span>, password: <span className="font-mono">123</span>
            </p>
            <p className="text-gray-700 mb-1">
                To login as user - email: arjun@123.com, sneha@123.com, ravi@123.com, karan@123.com, priya@123.com
            </p>
            <p className="text-gray-700">
                And All has password: <span className="font-mono">123</span>
            </p>
        </div>
    );
}