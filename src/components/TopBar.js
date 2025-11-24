import Link from "next/link";
import { useRouter } from "next/router";
import { X, Home, Users, } from "lucide-react";

const menuItems = [
    { name: "Dashboard",
      href: "/"

    },

    { name: "Clinics",
     href: "/clinics" 

    },

    {
        name: "Doctors",
        href: "/doctors",
        
    },

    {
        name: "Patients",
        href: "/patients",
        

        
    },
    {
        name: "Messages",
        href: "/messages",
        
    },
    {
        name: "Payments",
        href: "/payments",
        
    },

    {
        name: "Documents",
        href: "/documents",
       
    },

    {
        name: "Appointments",
        href: "/appointments",
        
    },
    // {
    //     name: "Events",
    //     href: "/event",
        
    // },
    
    

];

export default function TopBar() {
    const router = useRouter();

    return (
        <div
            className=" p-[10px]   text-white flex" 
            style={{ borderTopLeftRadius: "12px",paddingRight:"18px" }}
        >
            

            {/* Navigation */}
            <nav className="flex-1 space-y-1 flex">
                {menuItems.map((item) => {
                    const isActive = router.pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex  flex-row items-center gap-2 px-6 py-3 mb-0 rounded-lg transition 
                            ${isActive ? "bg-[#A73493]" : "hover:bg-[#d3d7d91f]"}`}
                            
                            style={{
                                borderBottom: isActive ? "none" : "none",
                            }}
                        >
                            
                            <span
                                className={`text-[12px] text-center ${isActive ? "text-white" : " text-[#6B7280]"}`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

            </nav>
        </div>
    );
}
