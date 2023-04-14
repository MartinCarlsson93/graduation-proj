import clientPromise from "../../../lib/mongodb";

export default async function GetProducts(req, res) {
  const client = await clientPromise;
  const db = client.db("Grocify");
  const data = await db.collection("products").find().toArray();
  return res.json(data);
}
