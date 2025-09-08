import DashboardView, { DashboardViewError, DashboardViewLoading } from "@/modules/dashboard/ui/views/dashhboard-view"
import { HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"


const Page = () => {

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