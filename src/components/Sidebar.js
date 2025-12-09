import Link from "next/link";
import { useRouter } from "next/router";
import { X, Home, Users,MessageSquare,DollarSignIcon,Handshake,Settings,UserRoundSearchIcon,Calendar,LogOut,HospitalIcon,UserRoundPenIcon } from "lucide-react";

const menuItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Clinics", href: "/clinics", icon: HospitalIcon },

    {
        name: "Doctors",
        href: "/doctors",
        icon: UserRoundPenIcon
    },

    {
        name: "Patients",
        href: "/patients",
        icon: ({ color }) => (
            <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={color}
            >
                <path
                    d="M15.5 13.1974C16.7132 13.8069 17.7534 14.785 18.5127 16.008C18.663 16.2502 18.7382 16.3713 18.7642 16.539C18.817 16.8798 18.584 17.2988 18.2666 17.4336C18.1104 17.5 17.9347 17.5 17.5833 17.5M13.8333 9.6102C15.0681 8.99657 15.9167 7.72238 15.9167 6.25C15.9167 4.77762 15.0681 3.50343 13.8333 2.8898M12.1667 6.25C12.1667 8.32107 10.4877 10 8.41665 10C6.34559 10 4.66665 8.32107 4.66665 6.25C4.66665 4.17893 6.34559 2.5 8.41665 2.5C10.4877 2.5 12.1667 4.17893 12.1667 6.25ZM2.63268 15.782C3.96127 13.7871 6.0578 12.5 8.41665 12.5C10.7755 12.5 12.872 13.7871 14.2006 15.782C14.4917 16.219 14.6372 16.4375 14.6205 16.7166C14.6074 16.9339 14.4649 17.2 14.2913 17.3313C14.0683 17.5 13.7615 17.5 13.148 17.5H3.68528C3.0718 17.5 2.76505 17.5 2.54202 17.3313C2.36836 17.2 2.22589 16.9339 2.21285 16.7166C2.19609 16.4375 2.34162 16.219 2.63268 15.782Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                />
            </svg>

        )
    },
    {
        name: "Messages",
        href: "/messages",
        icon: MessageSquare
    },
    {
        name: "Payments",
        href: "/payments",
        icon: DollarSignIcon
    },

    {
        name: "Documents",
        href: "/documents",
        icon: ({ color }) => (
            <svg
                width={15}
                height={20}
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.8335 3.33332C11.6085 3.33332 11.996 3.33332 12.3139 3.41851C13.1766 3.64968 13.8505 4.32355 14.0816 5.18628C14.1668 5.50419 14.1668 5.89168 14.1668 6.66666V14.3333C14.1668 15.7335 14.1668 16.4335 13.8943 16.9683C13.6547 17.4387 13.2722 17.8212 12.8018 18.0608C12.267 18.3333 11.567 18.3333 10.1668 18.3333H4.8335C3.43336 18.3333 2.7333 18.3333 2.19852 18.0608C1.72811 17.8212 1.34566 17.4387 1.10598 16.9683C0.833496 16.4335 0.833496 15.7335 0.833496 14.3333V6.66666C0.833496 5.89168 0.833496 5.50419 0.918682 5.18628C1.14985 4.32355 1.82372 3.64968 2.68645 3.41851C3.00436 3.33332 3.39185 3.33332 4.16683 3.33332M5.50016 4.99999H9.50016C9.96687 4.99999 10.2002 4.99999 10.3785 4.90916C10.5353 4.82927 10.6628 4.70178 10.7427 4.54498C10.8335 4.36672 10.8335 4.13337 10.8335 3.66666V2.99999C10.8335 2.53328 10.8335 2.29992 10.7427 2.12166C10.6628 1.96486 10.5353 1.83738 10.3785 1.75748C10.2002 1.66666 9.96687 1.66666 9.50016 1.66666H5.50016C5.03345 1.66666 4.8001 1.66666 4.62184 1.75748C4.46504 1.83738 4.33755 1.96486 4.25766 2.12166C4.16683 2.29992 4.16683 2.53328 4.16683 2.99999V3.66666C4.16683 4.13337 4.16683 4.36672 4.25766 4.54498C4.33755 4.70178 4.46504 4.82927 4.62184 4.90916C4.8001 4.99999 5.03345 4.99999 5.50016 4.99999Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        )
    },

    {
        name: "Appointments",
        href: "/appointments",
        icon: Handshake
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings
    },
    {
        name: "Find Doctor",
        href: "/search",
        icon: UserRoundSearchIcon
    },
    {
        name: "Calendar",
        href: "/calendar",
        icon: Calendar
    },
    {
        name: "Logout",
        href: "/login",
        icon: LogOut
    },
    

];

export default function Sidebar({ isOpen, setIsOpen }) {
    const router = useRouter();

    return (
        <aside
            className={`fixed p-[10px] custom-shadow block md:hidden  top-[80px] lg:top-[93px] lg:left-[15px] left-[0px] h-full lg:max-h-[calc(100vh-100px)]    lg:overflow-y-auto   md:w-[111px] w-64 bg-[#7026A1] text-white  flex-col transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-[30] lg:z-0 `} 
            style={{ borderTopLeftRadius: "12px",paddingRight:"18px" }}
        >
            {/* Mobile close button */}
            <div className="flex items-center justify-end mb-4 md:justify-center text-lg mt-[10px] pr-[10px] md:mt-0 md:pr-0">
                <button className="md:hidden" onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1">
                {menuItems.map((item) => {
                    const isActive = router.pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex md:flex-col flex-row items-center gap-2 px-6 py-3 rounded-lg transition 
                            ${isActive ? "bg-white" : "hover:bg-[#d3d7d91f]"}`}
                            onClick={() => setIsOpen(false)}
                            style={{
                                borderBottom: isActive ? "6px solid rgb(0 0 0 / 0.25)" : "none",
                            }}
                        >
                            <item.icon
                                className="w-5 h-5"
                                color={isActive ? "#355E5B" : "#fff"} // pass color prop here
                            />
                            <span
                                className={`text-[12px] text-center ${isActive ? "text-[#355E5B]" : "text-white"}`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

            </nav>
        </aside>
    );
}
