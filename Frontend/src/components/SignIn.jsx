import React from "react";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Sign In
                </h2>
                <form>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mb-4">
                        <a
                            href="#"
                            className="text-sm text-orange-500 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center justify-center my-6">
                    <span className="border-t border-gray-300 w-1/3"></span>
                    <span className="mx-4 text-gray-500">OR</span>
                    <span className="border-t border-gray-300 w-1/3"></span>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="text-orange-500 font-medium hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
