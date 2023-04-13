import clientPromise from "../../../lib/mongodb";

export default async function GetPersons(req, res) {
  const client = await clientPromise;
  const db = client.db("Grocify");
  const data = await db.collection("person").find().toArray();
  console.log(data);
  return res.json(data);
}