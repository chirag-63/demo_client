import { Login } from "@/components/login"

export default function LoginPage({setIsAuthenticated}) {
    return(
        <div className="flex justify-center items-center h-screen">
            <Login
                setIsAuthenticated={setIsAuthenticated}
            />
        </div>
    )
}