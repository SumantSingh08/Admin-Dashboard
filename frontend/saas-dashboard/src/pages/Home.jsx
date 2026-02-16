import { Link } from "react-router-dom";

function LandingPage() {
     
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">

            {/* Grid Background Lines */}
            <div className="absolute inset-0 bg-[linear-linear(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_100%]" />

            {/* Blur Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full" />
            <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full" />

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* ================= NAVBAR ================= */}
                <nav className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3 text-white text-xl font-semibold">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        Squid
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-white">Home</Link>

                        <Link to= "/login">
                        <button className="px-6 py-2 rounded-md text-white font-medium bg-linear-to-r from-pink-500 to-purple-600 hover:opacity-90 transition cursor-pointer">
                            Login
                        </button>
                        </Link>
                        
                    </div>

                </nav>

                {/* ================= HERO ================= */}
                <section className="max-w-[900px] mx-auto text-center mt-24 px-6">

                    <h1 className="text-white font-bold leading-tight 
                         text-[40px] md:text-[60px] lg:text-[72px]">
                        Beautiful Landing Page <br />
                        Design for You
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-8 max-w-[600px] mx-auto">
                        A good design is not only aesthetically pleasing, but also
                        functional. It should be able to solve the problem
                    </p>

                    <Link to="/login">
                    <button className="mt-10 px-8 py-3 rounded-md text-white font-medium text-lg
                             bg-linear-to-r from-pink-500 to-purple-600
                             hover:opacity-90 transition cursor-pointer">
                        Get Started
                    </button>
                    </Link>

                </section>

                {/* ================= DASHBOARD MOCKUP ================= */}
                <section className="relative mt-32">

                    {/* Curved linear Background */}
                    <div className="absolute inset-0 flex justify-center">
                        <div className="w-full h-[400px] bg-linear-to-r from-pink-400 to-purple-600 rounded-[50%] blur-[80px] opacity-40"></div>
                    </div>

                    {/* Dashboard Container */}
                    <div className="relative z-10 max-w-[1100px] mx-auto bg-[#0F1117] rounded-[32px] p-10 shadow-2xl">

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* LEFT CARD */}
                            <div className="bg-[#1A1C23] rounded-2xl p-6 h-[420px]">
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                                    <div className="h-3 bg-gray-700 rounded w-4/5"></div>
                                </div>

                                <div className="mt-20 flex justify-center">
                                    <div className="w-14 h-14 rounded-full bg-linear-to-r from-pink-500 to-purple-600"></div>
                                </div>
                            </div>

                            {/* MIDDLE COLUMN */}
                            <div className="flex flex-col gap-8">

                                {/* Donut Chart Card */}
                                <div className="bg-[#1A1C23] rounded-2xl p-6 h-[200px] flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border-[12px] border-purple-500 border-t-pink-400"></div>
                                </div>

                                {/* Bar Chart Card */}
                                <div className="bg-[#1A1C23] rounded-2xl p-6 h-[200px] flex items-end justify-center gap-4">
                                    <div className="w-4 h-12 bg-linear-to-t from-pink-500 to-purple-600 rounded"></div>
                                    <div className="w-4 h-16 bg-linear-to-t from-pink-500 to-purple-600 rounded"></div>
                                    <div className="w-4 h-20 bg-linear-to-t from-pink-500 to-purple-600 rounded"></div>
                                    <div className="w-4 h-24 bg-linear-to-t from-pink-500 to-purple-600 rounded"></div>
                                    <div className="w-4 h-28 bg-linear-to-t from-pink-500 to-purple-600 rounded"></div>
                                </div>

                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="flex flex-col gap-8">

                                {/* User List Card */}
                                <div className="bg-[#1A1C23] rounded-2xl p-6 h-[260px] space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-pink-500 to-purple-600"></div>
                                            <div className="flex-1">
                                                <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                                                <div className="h-2 bg-gray-700 rounded w-1/2 mt-2"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Empty Card */}
                                <div className="bg-[#1A1C23] rounded-2xl h-[140px]"></div>

                            </div>

                        </div>
                    </div>
                </section>

                {/* ================= FEATURES SECTION ================= */}
                <section className="relative mt-40 px-6">

                    <div className="max-w-[1200px] mx-auto">

                        {/* Section Heading */}
                        <div className="max-w-[600px]">
                            <h2 className="text-white text-[48px] font-bold leading-tight">
                                Feature Boxes
                            </h2>

                            <p className="mt-4 text-gray-400 text-lg leading-8">
                                A good design is not only aesthetically pleasing, but also
                                functional. It should be able to solve the problem
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                            {[
                                { linear: false },
                                { linear: false },
                                { linear: true },
                                { linear: false },
                                { linear: false },
                                { linear: false },
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-linear-to-b from-[#1A1C23] to-[#14161C]
                     rounded-[28px] p-10 text-center
                     shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                     hover:translate-y-[-6px]
                     transition duration-300"
                                >

                                    {/* Icon Box */}
                                    <div className="flex justify-center">
                                        <div
                                            className={`w-20 h-20 rounded-2xl flex items-center justify-center
                ${item.linear
                                                    ? "bg-linear-to-br from-pink-500 to-purple-600"
                                                    : "bg-[#22242C]"
                                                }`}
                                        >
                                            <div className="w-8 h-8 border-2 border-white rounded-md"></div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-8 text-white text-xl font-semibold">
                                        Fully Customizable
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 text-gray-400 leading-7 text-[16px]">
                                        A good design is not only aesthetically pleasing,
                                        but also functional. It should be able to solve the problem
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* ================= ORBIT SECTION ================= */}
                <section className="relative mt-48 px-6">

                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-24">

                        {/* ================= LEFT ORBIT ================= */}
                        <div className="relative flex justify-center items-center">

                            {/* Outer Rings */}
                            <div className="absolute w-[520px] h-[520px] rounded-full border border-gray-800"></div>
                            <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-800"></div>
                            <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-800"></div>

                            {/* Center Circle */}
                            <div className="w-[180px] h-[180px] bg-[#14161C] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10">
                                <div className="w-12 h-12 bg-white rounded-full"></div>
                            </div>

                            {/* Orbit Icons */}

                            {/* Zap-like */}
                            <div className="absolute top-[110px] left-[140px] w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                ✳
                            </div>

                            {/* Mailchimp-like */}
                            <div className="absolute top-[150px] right-[130px] w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                                M
                            </div>

                            {/* Webflow-like */}
                            <div className="absolute bottom-[120px] left-[200px] w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                W
                            </div>

                            {/* Small Glow Dots */}
                            <div className="absolute top-[120px] right-[240px] w-6 h-6 rounded-full bg-linear-to-r from-pink-500 to-purple-600 blur-sm"></div>
                            <div className="absolute bottom-[130px] right-[180px] w-6 h-6 rounded-full bg-linear-to-r from-pink-500 to-purple-600 blur-sm"></div>
                            <div className="absolute bottom-[200px] left-[120px] w-6 h-6 rounded-full bg-linear-to-r from-pink-500 to-purple-600 blur-sm"></div>

                        </div>

                        {/* ================= RIGHT CONTENT ================= */}
                        <div className="max-w-[520px]">

                            <h2 className="text-white text-[56px] font-bold leading-[1.15]">
                                We're here to <br />
                                guide and help <br />
                                you at all times
                            </h2>

                            <p className="mt-6 text-gray-400 text-[18px] leading-8">
                                A good design is not only aesthetically pleasing,
                                but also functional. It should be able to solve the problem
                            </p>

                            <button className="mt-8 px-8 py-3 rounded-md text-white font-medium text-lg
                         bg-linear-to-r from-pink-500 to-purple-600
                         hover:opacity-90 transition">
                                Download
                            </button>

                        </div>

                    </div>
                </section>

                <section className="bg-black py-24 px-6">
                    <div className="max-w-6xl mx-auto">

                        <div className="relative overflow-hidden rounded-[40px] 
                        bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500
                        px-10 md:px-20 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between">

                            {/* LEFT CONTENT */}
                            <div className="text-white max-w-xl z-10">

                                <p className="text-lg opacity-90 mb-6">
                                    Love our Our Tool?
                                </p>

                                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Fell Free to Join our <br />
                                    15 Days Free Trial
                                </h2>

                                <button className="mt-10 bg-black text-white px-8 py-4 rounded-lg hover:opacity-90 transition">
                                    Download Template
                                </button>

                            </div>

                            {/* RIGHT DESIGN (World pattern effect) */}
                            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-30">

                                <div className="absolute inset-0 bg-[radial-linear(circle_at_center,_black_2px,_transparent_2px)] 
                            bg-[length:20px_20px] opacity-20">
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE - Globe Effect */}
                        <div className="relative hidden lg:flex justify-center items-center">

                            {/* Globe Wireframe */}
                            <div className="w-[500px] h-[500px] rounded-full border border-gray-700 relative">

                                {/* Horizontal Lines */}
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute left-0 right-0 border-t border-gray-800"
                                        style={{ top: `${(i + 1) * 10}%` }}
                                    />
                                ))}

                                {/* Vertical Lines */}
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-0 bottom-0 border-l border-gray-800"
                                        style={{ left: `${(i + 1) * 10}%` }}
                                    />
                                ))}

                            </div>

                            {/* Blur effects */}
                            <div className="absolute -top-10 left-10 w-24 h-24 bg-white opacity-10 blur-2xl rounded-full"></div>
                            <div className="absolute bottom-10 right-10 w-28 h-28 bg-white opacity-10 blur-2xl rounded-full"></div>

                        </div>

                        {/* RIGHT SIDE - Form */}
                        <div>

                            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                                Get In Touch
                            </h2>

                            <p className="text-gray-400 mb-10 max-w-md">
                                A good design is not only aesthetically pleasing, but also functional.
                                It should be able to solve the problem.
                            </p>

                            <form className="space-y-6">

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />

                                <textarea
                                    placeholder="Message"
                                    rows="5"
                                    className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-linear-to-r from-pink-400 via-purple-500 to-indigo-500 
                         px-8 py-4 rounded-lg font-medium hover:opacity-90 transition"
                                >
                                    Get in Touch
                                </button>

                            </form>

                        </div>

                    </div>
                </section>

                <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-gray-400 pt-24 pb-10 px-6">

                    <div className="max-w-6xl mx-auto">

                        {/* TOP FOOTER */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                            {/* LEFT SIDE */}
                            <div>
                                <div className="text-white text-3xl mb-6">∞</div>

                                <p className="leading-relaxed">
                                    A good design is not only aesthetically pleasing, but also functional.
                                    It should be able to solve the problem
                                </p>
                            </div>

                            {/* COLUMN 1 */}
                            <div>
                                <h3 className="text-white font-semibold mb-6">Sections</h3>
                                <ul className="space-y-4">
                                    <li className="hover:text-white cursor-pointer transition">Home</li>
                                    <li className="hover:text-white cursor-pointer transition">Section One</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Two</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Tree</li>
                                </ul>
                            </div>

                            {/* COLUMN 2 */}
                            <div>
                                <h3 className="text-white font-semibold mb-6">Sections</h3>
                                <ul className="space-y-4">
                                    <li className="hover:text-white cursor-pointer transition">Home</li>
                                    <li className="hover:text-white cursor-pointer transition">Section One</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Two</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Tree</li>
                                </ul>
                            </div>

                            {/* COLUMN 3 */}
                            <div>
                                <h3 className="text-white font-semibold mb-6">Sections</h3>
                                <ul className="space-y-4">
                                    <li className="hover:text-white cursor-pointer transition">Home</li>
                                    <li className="hover:text-white cursor-pointer transition">Section One</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Two</li>
                                    <li className="hover:text-white cursor-pointer transition">Section Tree</li>
                                </ul>
                            </div>

                        </div>

                        {/* BOTTOM FOOTER */}
                        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">

                            <p className="mb-6 md:mb-0">
                                All Rights Reserved Inkyy.com 2022
                            </p>

                        

                        </div>

                    </div>

                </footer>
            </div>
        </div>
    );
}

export default LandingPage;
