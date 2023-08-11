"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Add() {
    const { pending } = useFormStatus();
    return <Button
        disabled={pending}>
        {pending ? (<><Loader2 className="animate-spin" />Add New</>) : (<><Plus />Add New</>)}
    </Button>
}

export function Delete() {
    const { pending } = useFormStatus();

    return <Button
        disabled={pending}>
        {pending ? <Loader2 className="text-red-600 animate-spin" /> : <Trash2 className="text-red-600" />}
    </Button>
}