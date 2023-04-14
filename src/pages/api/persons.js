import clientPromise from "../../../lib/mongodb";

export default async function GetPersons(req, res) {
  const client = await clientPromise;
  const db = client.db("Grocify");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPerson = await db.collection("person").insertOne(bodyObject);
      console.log(newPerson);
      res.json(newPerson.ops[0]);
      break;
    case "GET":
      const data = await db.collection("person").find().toArray();
      res.json(data);
      break;
  }
}
