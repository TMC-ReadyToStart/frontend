import { buttonVariants } from "@/components/ui/button";
import { UserAuthFormIn } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="w-screen h-screen">
            <div className="md:hidden">
                <img
                    src="https://img.freepik.com/premium-vector/abstract-black-background-ps-game-code_917853-2.jpg"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative flex-col items-center justify-center hidden h-full md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    to="/register"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "absolute top-4 right-4 md:right-8 md:top-8"
                    )}
                >
                    Register
                </Link>
                <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-[#BB432C]" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 mr-2"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Acme Inc
                    </div>
                    <div className="relative z-20 flex items-center justify-center h-full">
                        {/* <img
                            src="/logo.png"
                            alt="logo"
                            className="w-24 h-24 bg-white"
                        /> */}
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Login to account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below
                            </p>
                        </div>
                        <UserAuthFormIn />
                    </div>
                </div>
            </div>
        </div>
    );
}
