import React from "react";

const Users: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Users</h1>
            <ul className="divide-y divide-gray-200">
                <li className="py-4 flex items-center">
                    <span className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                        A
                    </span>
                    <div>
                        <p className="text-lg font-medium text-gray-900">Alice Johnson</p>
                        <p className="text-sm text-gray-500">alice@example.com</p>
                    </div>
                </li>
                <li className="py-4 flex items-center">
                    <span className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                        B
                    </span>
                    <div>
                        <p className="text-lg font-medium text-gray-900">Bob Smith</p>
                        <p className="text-sm text-gray-500">bob@example.com</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Users;