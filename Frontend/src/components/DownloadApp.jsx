import React from "react";

const DownloadAppSection = () => {
    return (
        <section className="bg-slate-200 py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    For a better experience, download the Swiggy app now!
                </h2>
                <p className="text-gray-600 mb-6">
                    Get your favorite food delivered faster and easier.
                </p>
                <div className="flex justify-center space-x-4">
                    {/* Play Store Button */}
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow hover:shadow-md transition"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play Store"
                            className="h-10"
                        />
                    </a>
                    {/* Apple Store Button */}
                    <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow hover:shadow-md transition"
                    >
                        <img
                            src="Images/apple1.png"
                            alt="Apple App Store"
                            class="h-10"
                        />
                    </a>



                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;
