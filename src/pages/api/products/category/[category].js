import clientPromise from "@/lib/mongodb";

async function main(req, res) {
    try {
        const client = await clientPromise;
        const productCollection = client.db("Builder").collection("Product");
        const { categori } = req.query;
        console.log(categori);

        let categoriName = categori;

        if (categori === "processor") {
            categoriName = "Processor";
        }
        if (categori === "motherboard") {
            categoriName = "Motherboard";
        }
        if (categori === "ram") {
            categoriName = "RAM";
        }
        if (categori === "case") {
            categoriName = "Case";
        }
        if (categori === "ssd") {
            categoriName = "Storage Device";
        }
        if (categori === "monitor") {
            categoriName = "Monitor";
        }
        if (categori === "others") {
            categoriName = "Others";
        }

        if (req.method === "GET") {
            const query = { categori: categoriName };
            const products = await productCollection.find(query).toArray();

            res.status(200).json({
                message: "Product fetched successfully!",
                data: products,
            });
        }
    } catch (error) {
        console.log(error);
        throw new Error(error).message;
    }
}

export default main;
