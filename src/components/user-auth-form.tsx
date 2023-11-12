"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Loader, Github } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useNavigate } from "react-router";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthFormUp({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-background text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                    <Github className="w-4 h-4 mr-2" />
                )}
                Github
            </Button>
        </div>
    );
}

export function UserAuthFormIn({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const auth = useAuth();
    const navigate = useNavigate();

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const user = {
            email: target.email.value,
            password: target.password.value,
        };

        console.log(user.email);
        auth.setAuth(JSON.stringify(user.email));

        setTimeout(() => {
            setIsLoading(false);
            navigate("/ui/dashboard");
        }, 2000);
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                        />
                        <Input
                            id="password"
                            placeholder="password"
                            type="password"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-background text-muted-foreground">
                        Or login with
                    </span>
                </div>
            </div> */}
            {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Github className="w-4 h-4 mr-2" />
        )}
        Github
      </Button> */}
        </div>
    );
}
