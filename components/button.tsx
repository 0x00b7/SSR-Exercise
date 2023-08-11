"use client";

import { cn } from "@/lib/utils";
import { Loader2, Trash2 } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Add({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const { pending } = useFormStatus();

    return <button disabled={pending} className={cn("bg-blue-600 p-2 rounded-md", className)}>{pending ? "Loading..." : "Add New"}</button>
}

export function Delete({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const { pending } = useFormStatus();

    return <button disabled={pending}>{pending ? <Loader2 className="text-red-600 animate-spin" /> : <Trash2 className="text-red-600" />}</button>
}