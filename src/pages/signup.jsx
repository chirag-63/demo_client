import { Signup } from "@/components/signup";

export default function SignupPage({ setIsAuthenticated }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <Signup
                setIsAuthenticated={setIsAuthenticated}
            />
        </div>
    )
}