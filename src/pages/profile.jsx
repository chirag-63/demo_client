import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { UserCard } from "@/components/userCard"
import { Search } from "lucide-react"

export default function ProfilePage() {
    return (
        <>
            <Navbar />
            <div className="mx-2 lg:mx-40 px-2 gap-5 md:justify-evenly
                items-center flex mt-4 rounded-lg 
                bg-gradient-to-b from-indigo-200"
            >
                <img src="/account.png" alt="user photo"
                    className="h-28 w-28 ml-7"
                />
                <div className="my-3 py-2 ml-5">
                    <div className="text-2xl font-semibold">
                        Chirag Chauhan
                    </div>
                    <div className="text-base italic ">
                        @chirag3199
                    </div>
                    <div className="mt-2">
                        Total Friends - 10
                    </div>
                </div>
            </div>
            <div className=" mx-2 lg:mx-40 gap-10 flex flex-col items-center px-2">
                <div className="w-full lg:px-32 lg:mt-4">
                    <Input
                        style={{ fontSize: '16px' }}
                        className="h-10 pl-10 md:h-12 mt-8"
                        placeholder="Search among your friends..."
                    />
                    <Search
                        className="ml-2 h-4 md:h-5 -mt-7 md:-mt-8 "
                    />
                </div>
                <div className="w-full mb-10 grid gap-4 items-center 
                    sm:grid-cols-1 lg:grid-cols-2">
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                    <UserCard text={"Remove"} color={"red"} />
                </div>
            </div>
        </>
    )
}