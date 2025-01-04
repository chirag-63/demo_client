import { Button } from "./ui/button"
import { Trash2, Check, UserMinus, UserPlus } from "lucide-react";

export const UserCard = ({ text, color, request }) => {
    return (
        <div className="w-full  flex hover:shadow-md hover:cursor-pointer hover:bg-gray-200 flex-shrink-0 justify-between border bg-gray-100 rounded-lg h-20 md:h-24 lg:h-28 items-center mx-2 px-4 lg:px-6">
            <div className="flex gap-3 md:gap-4 lg:gap-6 items-center">
                <img src="/account.png" alt="photo"
                    className="h-9 lg:h-12"
                />
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">Chirag Chauhan</div>
                    <div className="text-sm italic">@chirag3199</div>
                </div>
            </div>
            {!request
                ? <Button className={`w-20 text-white bg-${color}-500 hover:bg-${color}-600 md:w-24 text-xs md:text-sm`}
                >
                    {text === 'Add'
                        ? <UserPlus />
                        : <UserMinus />
                    }
                    {text}
                </Button>
                : <div className="flex gap-3">
                    <Button className="bg-green-500 hover:bg-green-600" >
                        <Check/>
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-600">
                        <Trash2/>
                    </Button>
                </div>
            }
        </div>
    )
}