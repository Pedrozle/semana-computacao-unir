import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(request) {
    let url = request.url.split("?");
    let query = url[1];
    let queries = query.split("&");
    let database = queries[0].split("=")[1];
    let colecao = queries[1].split("=")[1];

    const client = new MongoClient(
        `mongodb+srv://pedrozle:7jaBI5gvZ0WZnoXK@cluster0.kunsu4f.mongodb.net/`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    await client.connect();

    // Acesso ao banco de dados
    const db = client.db(database);
    const collection = db.collection(colecao);

    const data = await collection.find().toArray();

    client.close();

    return NextResponse.json(data);
}
