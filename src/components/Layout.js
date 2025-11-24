import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Map font props to Tailwind classes
const fontMap = {
    poppins: "font-poppins",
    inter: "font-inter",
    roboto: "font-roboto",
    // add more fonts if needed
};

export default function Layout({ children, font = "poppins" }) {
    const [isOpen, setIsOpen] = useState(false);

    // Get the corresponding Tailwind class
    const fontClass = fontMap[font] || "font-poppins";

    return (
        <div className={`min-h-screen flex flex-col bg-gray-50 gap-5 ${fontClass}`}>
            {/* ✅ Fixed Header */}
            <Header setIsOpen={setIsOpen} />

            {/* ✅ Main section */}
            <div className="flex flex-1 " >
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <main className="flex-1 lg:p-6 p-4  overflow-y-auto lg:z-[3]" style={{boxShadow:'0px 0px 2px 0px #355E5B1A' , borderTopLeftRadius:'16px',marginLeft:'-8px',backgroundColor:'#f7f8f9'}}>{children}</main>
            </div>
        </div>
    );
}
// position: relative;
//     left: -15px;
//     z-index: 3;
//     background-color: #f7f8f9;