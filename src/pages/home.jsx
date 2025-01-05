import { Navbar } from "@/components/navbar"
import { Input } from "@/components/ui/input"
import { UserCard } from "@/components/userCard"
import axios from "axios"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const getAllUsers = async () => {
            setLoading(true)
            try {
                const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/all?filter=${filter}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setUsers(result.data.user)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }
        getAllUsers();
    }, [filter])

    const dummyUser = {
        _id: 'dummy-id',
        name: 'Loading User',
    };

    return (
        <>
            <Navbar />
            <div className=" mx-2 mt-8 lg:mx-40 gap-10 flex flex-col items-center px-2">
                <div className="w-full lg:px-32 ">
                    <Input
                        onChange={(e) => setFilter(e.target.value)}
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
                    {loading
                        ? (
                            Array(4).fill().map((_, index) => (
                                <UserCard
                                    key={index}
                                    user={dummyUser}
                                    text={"Add"}
                                />
                            ))
                        )
                        : (users.map(
                            user => <UserCard
                                key={user._id} text={"Add"} user={user}
                            />)
                        )
                    }
                </div>
            </div>
        </>
    )
}