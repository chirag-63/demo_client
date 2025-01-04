import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { UserCard } from "./userCard"


export function SideBar({ isSidebarOpen, onClose }) {

    return (
        <Sheet open={isSidebarOpen} onOpenChange={onClose} >
            <SheetContent
                className="w-[450px] md:w-[500px]">
                <SheetHeader>
                    <SheetTitle className="text-2xl">
                        Pending Friend Requests
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-4 my-10">
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                    <UserCard request={true} />
                </div>
            </SheetContent>
        </Sheet>
    )
}