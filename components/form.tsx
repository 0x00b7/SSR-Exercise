"use client";

import { useState } from "react";
import { AddButton } from "./mutate";
import { Product } from "@/types";

const Form = () => {

    const [formData, setFormData] = useState<Product>({ product: "", price: 0 });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <form className="grid grid-cols-1 gap-3" onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                name="product"
                placeholder="Product"
                value={formData.product}
                onChange={handleFormChange}
                className="p-2 border-2 text-black border-gray-200 rounded-lg shadow-md"
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleFormChange}
                className="p-2 border-2 text-black border-gray-200 rounded-lg shadow-md"
            />
            <AddButton data={formData} />
        </form>
    )
}

export default Form;