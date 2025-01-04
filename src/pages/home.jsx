import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { UserCard } from "@/components/userCard"
import { Search } from "lucide-react"

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="mx-2 lg:mx-2 px-2 gap-5 items-center mt-6">
                <h1 className="text-xl font-serif font-semibold text-center">
                    Welcome Chirag, what a beautiful day..
                </h1>
            </div>
            <div className=" mx-2 lg:mx-40 gap-10 flex flex-col items-center px-2">
                <div className="w-full lg:px-32 ">
                    <Input
                        style={{ fontSize: '16px' }}
                        className="h-10 pl-10 md:h-12 mt-4"
                        placeholder="find new friends, for life..."
                    />
                    <Search
                        className="ml-2 h-4 md:h-5 -mt-7 md:-mt-8 "
                    />
                </div>

                <div className="w-full mb-10 grid gap-4 items-center 
                    sm:grid-cols-1 lg:grid-cols-2">
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                    <UserCard text={"Add"} color={"blue"} />
                </div>
            </div>
        </>
    )
}