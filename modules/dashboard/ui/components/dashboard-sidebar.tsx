"use client"

import { BriefcaseIcon, FileTextIcon, FolderKanbanIcon, HomeIcon, MailIcon, MoonIcon, SettingsIcon, SunIcon, UsersIcon } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../../../../components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const DashboardSidebar = () => {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const navitems = [
        { href: "/dashboard", name: "Home", icon: HomeIcon },
        { href: "/about", name: "About", icon: UsersIcon },
        { href: "/services", name: "Services", icon: BriefcaseIcon },
        { href: "/portfolio", name: "Portfolio", icon: FolderKanbanIcon },
        { href: "/blog", name: "Blog", icon: FileTextIcon },
        { href: "/dashboard/contact", name: "Contact", icon: MailIcon },
    ]

    return (
        // collapsible="icon" - collapsed view
        <Sidebar>
            <SidebarHeader>
                <Link href="/" className="flex items-center justify-center p-10">
                    <Image height={100} width={100} src="next.svg" alt="Logo" className="dark:invert" />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="flex items-center justify-center gap-4">
                    <SidebarMenu>
                        {navitems.map((item) => (
                            <SidebarMenuItem key={item.href} className="p-1">
                                <SidebarMenuButton
                                    className={cn(
                                        "h-12 rounded-lg px-4 border border-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105",
                                        pathname === item.href && "bg-primary/10 text-primary font-semibold shadow-primary/10 shadow-xl"
                                    )}
                                    isActive={pathname === item.href}
                                >
                                    <Link href={item.href} className="flex items-center justify-center gap-3">
                                        <item.icon className="size-5" />
                                        <p>{item.name}</p>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <Separator />
                <SidebarGroup className="flex flex-row items-center justify-between px-8">
                    <p>theme</p>
                    <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <SunIcon className="text-yellow-300" /> : <MoonIcon className="text-blue-700" />}
                    </Button>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="m-1">
                <div className="flex items-center gap-2 h-12 rounded-lg px-4 text-sm border border-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105">
                    <SettingsIcon className="size-5" /> <p>Settings</p>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
export default DashboardSidebar