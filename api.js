// api.js
export async function getAllProducts() {
    const res = await fetch("http://localhost:3000/api/products");
    const allProduct = await res.json();
    return allProduct?.data;
}
