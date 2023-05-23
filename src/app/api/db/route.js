import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(req, res) {
    let colecao = req.url.split("?")[1].split("=")[1];
    console.log(colecao);

    const client = new MongoClient(`${process.env.DATABASE_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();

    // Acesso ao banco de dados
    const db = client.db("atividades");
    const collection = db.collection(colecao);

    const data = await collection.find().toArray();

    client.close();

    return NextResponse.json(data);
}
