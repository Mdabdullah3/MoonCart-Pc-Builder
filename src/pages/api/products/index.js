import clientPromise from "@/lib/mongodb";

async function main(req, res) {
    try {
        const client = await clientPromise;
        const productCollection = client.db("Builder").collection("Product");

        if (req.method === "GET") {
            const product = await productCollection.find({}).toArray();
            res.status(200).json({
                message: "Products fetched successfully!",
                data: product,
            });
        }
    } catch (error) {
        console.log(error);
        throw new Error(error).message;
    }
}

export default main;