"use server";

import { Product } from "@/types";
import { revalidateTag } from "next/cache";

export const add = async (data: Product) => {

    if (!data.product || !data.price) return;

    await fetch("https://64d4d574b592423e4694c0c3.mockapi.io/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        next: {
            tags: ["add"]
        },
    });

    revalidateTag("add");
}

export const del = async (id: Product["id"]) => {
    if (!id) return;

    await fetch(`https://64d4d574b592423e4694c0c3.mockapi.io/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            tags: ["del"]
        },
    });

    revalidateTag("del");
}
