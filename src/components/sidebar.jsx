import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { UserCard } from "./userCard";
import axios from "axios";

export function SideBar({ isSidebarOpen, onClose }) {
    const [pendingRequest, setPendingRequest] = useState([]);

    const handleRemoveRequest = (userId) => {
        setPendingRequest((prev) => prev.filter((user) => user._id !== userId));
    };
    
    useEffect(() => {
        const getPendingRequests = async () => {
            try {
                const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/all/pending`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(result.data.receivedRequests)
                setPendingRequest(result.data.receivedRequests)
            } catch (error) {
                console.error(error);
            }
        }
        getPendingRequests();
    }, [])

    return (
        <Sheet open={isSidebarOpen} onOpenChange={onClose} >
            <SheetContent
                className="w-[450px] md:w-[500px]">
                <SheetHeader>
                    <SheetTitle className="text-2xl">
                        Pending Friend Requests
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-4 my-10">
                    {pendingRequest.map(
                        user => <UserCard
                            key={user._id} 
                            text={"Add"} 
                            user={user} 
                            request={true}
                            onRequestHandled={handleRemoveRequest}
                        />)}
                </div>
            </SheetContent>
        </Sheet>
    )
}