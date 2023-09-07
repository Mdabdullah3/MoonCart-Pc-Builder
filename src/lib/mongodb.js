const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mdabdullah:jqKxW8AC8tYBbwYB@cluster0.2oufhoy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const clientPromise = client.connect();

export default clientPromise;