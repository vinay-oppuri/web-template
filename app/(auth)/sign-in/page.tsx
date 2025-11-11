import { auth } from "@/lib/auth"
import SignInView from "@/modules/auth/ui/views/sign-in-view"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const Page = async () => {

    const session = auth.api.getSession({
            headers: await headers()
        })
    auth
        if(!!session) {
            redirect('/dashboard')
        }

    return <SignInView />
}
export default Page