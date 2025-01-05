import { Button } from "./ui/button"
import { Trash2, Check, UserMinus, UserPlus } from "lucide-react";
import { useState } from "react";
import { addFriend } from "@/lib/addFriend";
import { acceptRequest } from "@/lib/acceptRequest";
import { rejectRequest } from "@/lib/rejectRequest";
import { removeFriend } from "@/lib/removeFriend";

export const UserCard = ({ text, request, user, onRequestHandled }) => {
    const [requestStatus, setRequestStatus] = useState(user.requestStatus || "none");

    // const buttonColor = requestStatus === "sent" ? "green" : "blue";
    const buttonText = requestStatus === "sent" ? "Sent" : "Add";

    const handleAddFriend = async () => {
        try {
            await addFriend(user.username);
            setRequestStatus("sent");
        } catch (error) {
            console.error("Error sending friend request:", error);
        }
    }

    const handleAcceptRequest = async () => {
        // console.log(user._id)
        try {
            await acceptRequest(user._id);
            onRequestHandled(user._id);
        } catch (error) {
            console.error("Error accepting friend request:", error);
        }
    }

    const handleRejectRequest = async () => {
        try {
            await rejectRequest(user._id);
            onRequestHandled(user._id);
        } catch (error) {
            console.error("Error rejecting friend request:", error);
        }
    }

    const handleRemoveFriend = async () => {
        try {
            await removeFriend(user._id);
            onRequestHandled(user._id);
        } catch (error) {
            console.error("Error removing friend:", error);
        }
    }

    return (
        <div className="w-full  flex hover:shadow-md hover:cursor-pointer
         hover:bg-gray-200 flex-shrink-0 justify-between border bg-gray-100 rounded-lg 
         h-20 md:h-24 lg:h-28 items-center mx-2 px-4 lg:px-6">
            <div className="flex gap-3 md:gap-4 lg:gap-6 items-center">
                <img src="/account.png" alt="photo"
                    className="h-9 lg:h-12"
                />
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">
                        {user.name}
                    </div>
                    <div className="text-sm italic">
                        @{user.username}
                    </div>
                </div>
            </div>
            {!request
                ? text === 'Add'
                    ? <Button
                        onClick={async () => {
                            if (requestStatus !== "sent") {
                                handleAddFriend();
                            }
                        }
                        }
                        className={`w-20 text-white 
                            ${requestStatus === 'sent' ?
                                'bg-green-500 hover:bg-green-500 hover:cursor-default' :
                                'bg-blue-500 hover:bg-blue-600'} 
                                md:w-24 text-xs md:text-sm`}>
                        {requestStatus === 'sent'
                            ? <></>
                            : <UserPlus />
                        }
                        {buttonText}
                    </Button>
                    : <Button
                        onClick={handleRemoveFriend}
                        className={`w-20 text-white bg-red-500 hover:bg-red-600 
                            md:w-24 text-xs md:text-sm`} >
                        <UserMinus />
                        Remove
                    </Button>
                : <div className="flex gap-3">
                    <Button
                        onClick={handleAcceptRequest}
                        className="bg-green-500 hover:bg-green-600" >
                        <Check />
                    </Button>
                    <Button
                        onClick={handleRejectRequest}
                        className="bg-red-500 hover:bg-red-600">
                        <Trash2 />
                    </Button>
                </div>
            }
        </div>
    )
}