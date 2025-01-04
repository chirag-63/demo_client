
import { Link } from "react-router-dom";
import { CircleEllipsis } from 'lucide-react';
import { useState } from "react";
import { SideBar } from "./sidebar";

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="sticky top-1 mx-2 lg:mx-72 rounded-full px-7 z-50 h-12 lg:h-16 bg-zinc-900 flex justify-center items-center text-white">
            <ul className="flex gap-16 md:gap-32">
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
                <li onClick={() => {
                    setIsSidebarOpen(true);
                }}
                    className="hover:cursor-pointer">
                    Pending
                </li>
                <SideBar
                    isSidebarOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </ul>
        </div>
    )
}