import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://victor:123@alura-cluster.8ldqh.mongodb.net/?retryWrites=true&w=majority&appName=alura-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let documentosColecao;

try {
  await client.connect();

  const database = client.db("alura");
  const collection = database.collection("documentos");

  documentosColecao = collection;
} catch (e) {
  console.error(e);
}

export { documentosColecao };