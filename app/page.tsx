import { Product } from "@/types";

import { FormHandle, FormDelete } from "@/components/form-handle";

export default async function Home() {
  const res = await fetch("https://64d4d574b592423e4694c0c3.mockapi.io/products", {
    cache: "no-cache"
  }).then(res => res.json());

  return (
    <main className="flex flex-col w-[100%] place-items-center p-4 gap-6">
      <FormHandle />
      <div className="grid gap-2 w-[100%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {res.reverse().map((DATA: Product) => (
          <div key={DATA.ID} className="flex flex-col items-center w-[100%] p-2 border-2 rounded-lg">
            <FormDelete ID={DATA.ID!} />
            <h1 className="text-2xl font-bold">{DATA.ITEM}</h1>
            <p className="text-xl font-bold">{DATA.PRICE}€</p>
          </div>
        ))}
      </div>
    </main>
  )
}
