"use client"

import { PanelLeft, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import UserProfile from "@/components/user-profile"

const DashboardNavbar = () => {
    const {toggleSidebar} = useSidebar()

    return (
        <div className="relative flex items-center justify-between gap-4">
            <Button variant="outline" onClick={toggleSidebar}>
                <PanelLeft/>
            </Button>
            <Input placeholder="Search..." className="p-5.5 border-none"/>
            <SearchIcon className="z-0 size-4 absolute right-24"/>
            <UserProfile/>
        </div>
    )
}
export default DashboardNavbar