"use client"

import { Product } from "@/types";
import { Add, Delete } from "@/components/form-button";
import { add, del } from "@/actions/mutation";
import { Input } from "@/components/ui/input";

export function FormHandle() {

    const formAdd = async (e: FormData) => {
        const ITEM = e.get("ITEM") as string;
        const PRICE = e.get("PRICE") as number | null;

        if (!ITEM || !PRICE) return;

        await add({ ITEM, PRICE } as Product);
    }

    return (
        <form action={formAdd} className="grid grid-cols-1 gap-3">
            <Input name="ITEM" type="text" />
            <Input name="PRICE" step=".01" type="number" />
            <Add />
        </form>
    );
}


export function FormDelete({ ID }: Product) {
    if (!ID) return;

    return (
        <form action={() => del({ ID })} className="flex h-0 relative w-[100%] justify-end">
            <Delete />
        </form>
    );
}