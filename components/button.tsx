"use client";

import { cn } from "@/lib/utils";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Add({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const { pending } = useFormStatus();

    return <button disabled={pending} className={cn("bg-blue-600 p-2", className)}>{pending ? "Loading..." : "Add!"}</button>
}

export function Delete({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const { pending } = useFormStatus();

    return <button disabled={pending} className={cn("bg-red-600 h-6 w-6 rounded-xl", className)}>{pending ? "..." : "X"}</button>
}