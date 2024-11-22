import React from 'react'




const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 ">
            <div className=" w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Swiggy Logo */}
                    <div>
                        <img
                            src="Images/logo.png"
                            alt="Swiggy Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-gray-400 text-sm">
                            © 2024 Swiggy. All rights reserved.
                        </p>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Help & Support</li>
                            <li>Partner with Us</li>
                            <li>Ride with Us</li>
                        </ul>
                    </div>

                    {/* We Deliver To Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">We Deliver To</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Bangalore</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Kolkata</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}





export default Footer;