"use client";



export default function LoginPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT PURPLE PANEL */}
            <div className="bg-[#6A1B9A] flex items-center justify-center relative overflow-hidden p-10">
                {/* Background Shapes */}
                <div className="absolute top-10 left-5 w-32 h-32 border-4 border-purple-300 rounded-lg rotate-12 opacity-40"></div>
                <div className="absolute bottom-16 right-10 w-48 h-48 border-4 border-purple-300 rounded-lg -rotate-12 opacity-40"></div>

                <div className="relative text-white max-w-md">
                    <h1 className="text-4xl font-bold leading-snug mb-6">
                        Welcome to our <br /> community
                    </h1>

                    <p className="text-lg opacity-90 leading-relaxed">
                         &quot;What mental health needs is <br />
                        more sunlight, more candor, <br />
                        and more unashamed <br />
                        conversation, &quot;
                        <br /><br />
                        <span className="font-medium">~ Glenn Close</span>
                    </p>
                </div>
            </div>

            <div className="bg-[#F7F8FA] flex items-center justify-center p-10">
                <div className="w-full max-w-sm">

                    {/* Logo + Title */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-2">
                            {/* Sample Logo (replace your SVG here) */}

                            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.6797 0C68.855 0 72.2402 3.38527 72.2402 7.56055V41.1602C72.2402 45.3354 68.855 48.7207 64.6797 48.7207H48.7207V64.2598C48.7207 68.435 45.3354 71.8203 41.1602 71.8203H7.56055C3.38539 71.8202 0 68.435 0 64.2598V30.6602C0.00021133 26.4852 3.38552 23.0997 7.56055 23.0996H41.1602C45.3353 23.0996 48.7205 26.4851 48.7207 30.6602V42H64.6797C65.1436 42 65.5195 41.6241 65.5195 41.1602V7.56055C65.5195 7.09663 65.1436 6.7207 64.6797 6.7207H31.0801C30.6164 6.72095 30.2402 7.09678 30.2402 7.56055V16.4854H23.5195V7.56055C23.5195 3.38543 26.905 0.000245365 31.0801 0H64.6797ZM7.56055 29.8203C7.09688 29.8205 6.72091 30.1965 6.7207 30.6602V64.2598C6.7207 64.7236 7.09675 65.0995 7.56055 65.0996H41.1602C41.6241 65.0996 42 64.7237 42 64.2598V48.7207H31.0801C26.905 48.7205 23.5195 45.3353 23.5195 41.1602V29.8203H7.56055ZM30.2402 41.1602C30.2402 41.6239 30.6164 41.9998 31.0801 42H42V30.6602C41.9998 30.1964 41.6239 29.8203 41.1602 29.8203H30.2402V41.1602Z" fill="url(#paint0_linear_133_3557)" />
                                <defs>
                                    <linearGradient id="paint0_linear_133_3557" x1="71.6984" y1="72.8976" x2="0.435396" y2="-1.85149" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7026A1" />
                                        <stop offset="1" stop-color="#DE4385" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <h1 className="text-4xl font-semibold text-[#32297B]">
                            Pretium
                        </h1>
                        <p className="text-sm tracking-wide text-[#32297B] font-medium opacity-80 -mt-1">
                            HEALTH SOLUTIONS
                        </p>
                        <p className="text-gray-500 mt-4">
                            Welcome! Please enter your details.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Remember + Forgot password */}
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm text-gray-600">Remember me</span>
                        </label>

                        <button className="text-sm text-[#0E1928] hover:underline">
                            Forgot password
                        </button>
                    </div>

                    {/* Sign in button */}
                    <button
                        className="w-full bg-[#7026A1] hover:bg-purple-800 text-white py-2 rounded-md font-medium shadow-sm transition"
                    >
                        Sign in
                    </button>
                </div>
            </div>

        </div>
    );
}
