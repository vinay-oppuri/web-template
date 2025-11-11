"use client"

import { Avatar } from "@radix-ui/react-avatar"
import { ChevronDown, UserIcon } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { signOut } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

const UserProfile = () => {
    const router = useRouter();

    const onSubmit = async () => {
        try {
            await signOut()
            router.push("/sign-in")
        } catch (err) {
            console.error("Sign-out failed:", err);
        }
    }
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="flex items-center justify-center gap-2">
                <Avatar className="border border-ring rounded-full size-10 flex items-center justify-center">
                    <UserIcon className="text-muted-foreground" />
                </Avatar>
                <ChevronDown className="size-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-muted">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant="destructive" onClick={() => onSubmit()} className="w-full">
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserProfile