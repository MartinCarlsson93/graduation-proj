import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Grocify");
  switch (req.method) {
    case "POST":
      let stringify = JSON.stringify(req.body);
      let bodyObject = JSON.parse(stringify);
      console.log(stringify);
      let newPerson = await db.collection("person").insertOne(bodyObject);
      res.json(newPerson);
      break;
    case "GET":
      const data = await db.collection("person").find().toArray();
      res.json(data);
      break;
  }
}
