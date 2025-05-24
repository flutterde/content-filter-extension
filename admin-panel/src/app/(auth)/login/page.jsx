

export default function LoginPage() {

    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
            <form>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
}
