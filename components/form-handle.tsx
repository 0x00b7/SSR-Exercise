"use client";

import Button from "./button";

import { add } from "@/actions/mutation";
import { Product } from "@/types";

export default function FormHandle() {

    const formHandler = async (e: FormData) => {
        const I: Product["I"] | null = e.get("I") as string;
        const P: Product["P"] | null = e.get("P") as number | null;

        if (!I || !P) return;

        await add({ I, P } as Product);
    }

    return (
        <form action={formHandler} className="grid grid-cols-1 gap-3">
            <input name="I" className="text-gray-950" type="text" />
            <input name="P" className="text-gray-950" type="number" />
            <Button className="bg-red-600" />
        </form>
    );
}