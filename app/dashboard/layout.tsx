import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar"
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <DashboardSidebar/>
            <main className="flex flex-col h-screen w-screen bg-background overflow-x-hidden px-6 py-4">
                <DashboardNavbar/>
                {children}
            </main>
        </SidebarProvider>
    )
}
export default Layout