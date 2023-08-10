"use client"

import { add, del } from "@/actions/serverActions"
import { useTransition } from "react"

type dataProps = {
    data: {
        product: string,
        price: number,
    }
}

export function AddButton({ data }: dataProps) {
    const [isPending, startTransition] = useTransition();

    return <button onClick={() => startTransition(() => add(data))} className="bg-green-600 p-1 w-[100%] rounded-lg hover:bg-red-600 transition-all">{isPending ? "Loading..." : "Add"}</button>
}

export function DelButton(id: { id: number }) {
    const [isPending, startTransition] = useTransition();

    return <button onClick={() => startTransition(() => del(id.id!))} className="bg-red-600 p-1 w-[100%] rounded-lg m-2 hover:bg-green-600 transition-all">{isPending ? "Loading..." : "Delete"}</button>
}