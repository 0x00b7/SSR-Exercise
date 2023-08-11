"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Add() {
    const { pending } = useFormStatus();
    return <Button
        variant="secondary"
        size="lg"
        disabled={pending}
        className="gap-1"
    >
        {pending ? (<><Loader2 className="text-green-400 animate-spin" />Add New</>) : (<><Plus />Add New</>)}
    </Button>
}

export function Delete() {
    const { pending } = useFormStatus();

    return <Button
        variant="ghost"
        size="icon"
        className="w-6 h-6 p-1"
        disabled={pending}>
        {pending ? <Loader2 className="text-red-400 animate-spin" /> : <Trash2 />}
    </Button>
}