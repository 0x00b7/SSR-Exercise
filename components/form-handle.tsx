"use client";

import { Product } from "@/types";
import { Add, Delete } from "./button";
import { add, del } from "@/actions/mutation";

export function FormHandle() {
    const formAdd = async (e: FormData) => {
        const ITEM = e.get("ITEM") as string;
        const PRICE = e.get("PRICE") as number | null;

        if (!ITEM || !PRICE) return;

        await add({ ITEM, PRICE } as Product);
    }

    return (
        <form action={formAdd} className="grid grid-cols-1 gap-3">
            <input name="ITEM" className="text-gray-950 p-2 rounded-md" type="text" />
            <input name="PRICE" className="text-gray-950 p-2 rounded-md" step=".01" type="number" />
            <Add className="bg-green-600" />
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