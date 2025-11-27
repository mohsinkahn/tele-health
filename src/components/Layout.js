import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";

const fontMap = {
    poppins: "font-poppins",
    inter: "font-inter",
    roboto: "font-roboto",
};

export default function Layout({ children, font = "poppins" }) {
    const [isOpen, setIsOpen] = useState(false);
    const fontClass = fontMap[font] || "font-poppins";

    const pathname = usePathname();

    // ❌ Hide layout elements on login page
    const hideLayout = pathname === "/login/new";

    return (
        <div className={`min-h-screen flex flex-col bg-gray-50 gap-5 ${fontClass}`}>

            {/* Show header only when NOT login page */}
            {!hideLayout && <Header setIsOpen={setIsOpen} />}

            <div className="flex flex-1">
                
                {/* Show sidebar only when NOT login page */}
                {!hideLayout && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}

                {/* Main content area */}
                <main
                    className={`flex-1 overflow-y-auto 
                    ${hideLayout ? "p-0 bg-white" : "lg:p-6 p-4"} 
                    `}
                    style={
                        hideLayout
                            ? {}
                            : {
                                  boxShadow: "0px 0px 2px 0px #355E5B1A",
                                  borderTopLeftRadius: "16px",
                                  marginLeft: "-8px",
                                  backgroundColor: "#f7f8f9",
                              }
                    }
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
