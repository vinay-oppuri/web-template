import { auth } from "@/lib/auth"
import DashboardView, { DashboardViewError, DashboardViewLoading } from "@/modules/dashboard/ui/views/dashhboard-view"
import { HydrationBoundary } from "@tanstack/react-query"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"


const Page = async () => {

    const session = auth.api.getSession({
            headers: await headers()
        })
    
        if(!session) {
            redirect('/sign-in')
        }

    return (
        // <HydrationBoundary state={undefined}>
        <Suspense fallback={<DashboardViewLoading />}>
            <ErrorBoundary fallback={<DashboardViewError />}>
                <DashboardView />
            </ErrorBoundary>
        </Suspense>
        // </HydrationBoundary>
    )
}
export default Page