"use client"

import { useState } from "react"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from "@/lib/auth-client"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { OctagonAlertIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
})

const SignInView = () => {

    const [error, setError] = useState<string | null>(null)
    const [pending, setPending] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setError(null)
        setPending(true)

        signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: '/dashboard'
        }, {
            onSuccess: () => setPending(false),
            onError: ({ error }) => {
                setError(error.message)
                setPending(false)
            }
        })
    }

    return (
        <div className="flex flex-col items-center  gap-6">
            <Card className="min-w-md overflow-hidden justify-center p-0">
                <CardContent className="grid grid-cols-1 p-0">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
                            <div className="text-center space-y-1">
                                <h1 className="flex flex-col py-2 gap-4 text-3xl font-bold">
                                    Welcome Back
                                </h1>
                                <p className="text-muted-foreground">Login to your account</p>
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="elon@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {!!error && (
                                <Alert className="bg-destructive/10 border-none">
                                    <OctagonAlertIcon className="h-4 w-4 text-destructive" />
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}

                            <Button disabled={pending} type="submit" className="w-full">
                                Sign In
                            </Button>
                            {/* <div className="grid grid-rows-2 gap-4">
                                <Button
                                    disabled={pending}
                                    variant="outline"
                                    type="button"
                                    className="w-full flex items-center justify-center gap-3"
                                    onClick={() => onSocial('google')}
                                >
                                    <FaGoogle className="text-lg text-muted-foreground" />
                                    <span className="text-muted-foreground">Login with Google</span>
                                </Button>
                                <Button
                                    disabled={pending}
                                    variant="outline"
                                    type="button"
                                    className="w-full flex items-center justify-center gap-3"
                                    onClick={() => onSocial('github')}
                                >
                                    <FaGithub className="text-lg text-muted-foreground" />
                                    <span className="text-muted-foreground">Login with GitHub</span>
                                </Button>
                            </div> */}

                            <p className="text-center text-sm text-muted-foreground">
                                Don&apos;t have an account?{' '}
                                <Link href="/signup" className="underline text-blue-700">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <p className="text-center text-xs text-muted-foreground">
                By clicking continue, you agree to our{' '}
                <a href="#" className="underline hover:text-primary">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
            </p>
        </div>
    )
}
export default SignInView