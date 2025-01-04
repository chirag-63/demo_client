import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        setError,
        control
    } = useForm()

    const onSubmit = async (data) => {
        try{
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
                username: data.username,
                password: data.password
            })
            localStorage.setItem('token', result.data.token)
            navigate('/home')
        } catch(error){
            console.log(error)
            const errorMessage = error?.response?.data?.message
            console.log(errorMessage)
            setError("root", {
                message: errorMessage || "something went wrong!!"
            })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-[400px] gap-8 flex flex-col bg-gray-100 px-8 py-12 rounded-lg">
            <div className="flex justify-center text-3xl font-bold font-sans">
                Login Form
            </div>
            <div className="space-y-4 flex flex-col ">
                <div>
                    <Label className='ml-1' htmlFor="username">Username{"*"}</Label>
                    <Input
                        className="h-10 mt-1 bg-white"
                        id="username"
                        type="text"
                        placeholder="your unique username here"
                        {...register("username", {
                            required: "username is required"
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
                            required: "password is required"
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
                Dont have an account?  
                <Link className="ml-1 hover:underline" to={"/signup"}>
                    Signup
                </Link>
            </div>
        </form>
    )
}