import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { UserCard } from "@/components/userCard"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProfilePage() {
    const [friends, setFriends] = useState([]);
    const [user, setUser] = useState({});
    const [filter, setFilter] = useState('')
    const [loading, setLoading] = useState(true)
    const [friendCount, setFriendCount] = useState(0)

    useEffect(() => {
        const getFriendsList = async () => {
            setLoading(true)
            try {
                const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/friends`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setFriends(result.data)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }
        getFriendsList();
    }, [])

    useEffect(() => {
        const getMyProfile = async () => {
            try {
                const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(result.data)
                setUser(result.data.user)
                setFriendCount(result.data.friendCount)
            } catch (error) {
                console.error(error);
            }
        }
        getMyProfile();
    }, [])

    const handleRemoveFriend = (userId) => {
        setFriends((prev) => prev.filter((user) => user._id !== userId));
    };

    const filteredFriends = friends.filter(
        (friend) =>
            friend.name.toLowerCase().includes(filter.toLowerCase()) ||
            friend.username.toLowerCase().includes(filter.toLowerCase())
    );

    const dummyUser = {
        _id: 'dummy-id',
        name: 'Loading User',
    };

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
                        {user.name}
                    </div>
                    <div className="text-base italic ">
                        @{user.username}
                    </div>
                    <div className="mt-2">
                        Total Friends - {friendCount}
                    </div>
                </div>
            </div>
            <div className=" mx-2 lg:mx-40 gap-10 flex flex-col items-center px-2">
                <div className="w-full lg:px-32 lg:mt-4">
                    <Input
                        style={{ fontSize: '16px' }}
                        value={filter}
                        className="h-10 pl-10 md:h-12 mt-8"
                        placeholder="Search among your friends..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <Search
                        className="ml-2 h-4 md:h-5 -mt-7 md:-mt-8 "
                    />
                </div>
                <div className="w-full mb-10 grid gap-4 items-center 
                    sm:grid-cols-1 lg:grid-cols-2">
                    {loading
                        ? (Array(4).fill().map((_, index) => (
                            <UserCard
                                key={index}
                                user={dummyUser}
                                text={"remove"}
                            />
                        ))
                        ) : (
                            filteredFriends.map(
                                (friend) => (
                                    <UserCard
                                        key={friend._id}
                                        text={"Remove"}
                                        user={friend}
                                        onRequestHandled={handleRemoveFriend}
                                    />
                                )
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}