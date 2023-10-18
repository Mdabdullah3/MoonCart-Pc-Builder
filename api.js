import { apiLink } from "@/lib/config";

// api.js
export async function getAllProducts() {
    const res = await fetch(`${apiLink}/api/products`);
    const allProduct = await res.json();
    return allProduct?.data;
}
