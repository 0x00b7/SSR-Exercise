"use client";

import { cn } from "@/lib/utils";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Button({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const { pending } = useFormStatus();

    return <button className={cn("bg-blue-600 p-2", className)}>{pending ? "Loading..." : "Add!"}</button>
}