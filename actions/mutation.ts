"use server";

import { Product } from "@/types";
import { revalidateTag } from "next/cache";

export const add = async (DATA: Product) => {
    if (!DATA) return;

    await fetch("https://64d4d574b592423e4694c0c3.mockapi.io/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(DATA),
        next: {
            tags: ["add"],
        }
    }).then(() => revalidateTag("add"));
}

export const del = async ({ ID }: Product) => {
    if (!ID) return;

    await fetch(`https://64d4d574b592423e4694c0c3.mockapi.io/products/${ID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            tags: ["del"],
        }
    }).then(() => revalidateTag("del"));
}
