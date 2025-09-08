import ErrorState from "@/components/error-state"
import LoadingState from "@/components/loading-state"

const DashboardView = () => {

    return (
        <div>
            Dashboard View
        </div>
    )
}
export default DashboardView

export const DashboardViewError = () => {
    return (
        <ErrorState
            title = "Error"
            description = "Please try again"
        />
    )
}

export const DashboardViewLoading = () => {
    return (
        <LoadingState
            title = "Loading..."
            description = "Please wait for a few seconds"
        />
    )
}