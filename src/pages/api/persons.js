import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Grocify");
  switch (req.method) {
    case "POST":
      console.log(req.body);
      try {
        const result = await db.collection("person").insertOne(req.body);
        res.send(result.ops[0]);
      } catch (err) {
        console.error(err);
        res.send({
          Error: "An error has occured",
        });
      }
      break;
    case "GET":
      const data = await db.collection("person").find().toArray();
      res.json(data);
      break;
  }
}
