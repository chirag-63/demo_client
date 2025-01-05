import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Signup = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        setError,
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
                name: data.name,
                username: data.username,
                password: data.password
            })
            localStorage.setItem('token', result.data.token)
            setIsAuthenticated(true)
            navigate('/home')
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            console.log(errorMessage)
            if (errorMessage === 'Username already taken') {
                setError("username", {
                    message: errorMessage
                })
            }
            else {
                setError("root", {
                    message: errorMessage || "something went wrong!!"
                })
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-[400px] gap-8 flex flex-col bg-gray-100 px-8 py-12 rounded-lg">
            <div className="flex justify-center text-3xl font-bold font-sans">
                Signup Form
            </div>
            <div className="space-y-4 flex flex-col ">
                <div>
                    <Label className='ml-1' htmlFor="name">Full Name{"*"}</Label>
                    <Input
                        className="h-10 mt-1 bg-white"
                        id="name"
                        type="text"
                        placeholder="your name here"
                        {...register("name", {
                            required: "name is required",
                            minLength: {
                                value: 1,
                                message: "username must have at least 1 characters",
                            },
                        })}
                    />
                    {errors.name && <p className="text-red-500 text-sm ml-1 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <Label className='ml-1' htmlFor="username">Username{"*"}</Label>
                    <Input
                        className="h-10 mt-1 bg-white"
                        id="username"
                        type="text"
                        placeholder="your unique username here"
                        {...register("username", {
                            required: "username is required",
                            minLength: {
                                value: 2,
                                message: "username must have at least 2 characters",
                            },
                        })}
                    />
                    {errors.username && <p className="text-red-500 text-sm ml-1 mt-1">{errors.username.message}</p>}
                </div>
                <div>
                    <Label className='ml-1' htmlFor="password">Password{"*"}</Label>
                    <Input
                        className="h-10 mt-1 bg-white "
                        id="password"
                        type="password"
                        placeholder="your password here"
                        {...register("password", {
                            required: "password is required",
                            minLength: {
                                value: 6,
                                message: "Password must have at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm ml-1 mt-1">{errors.password.message}</p>}
                </div>
            </div>
            <Button type="submit" disabled={isSubmitting}>
                Submit
            </Button>
            {errors.root && (<div className="text-red-500 text-center text-sm ml-1">{errors.root.message}</div>)}

            <div className="text-center text-sm border-t pt-4 border-black">
                Already a user?
                <Link className="ml-1 hover:underline" to={"/login"}>
                    Login
                </Link>
            </div>
        </form>
    )
}