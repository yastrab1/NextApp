'use server'
import client from "@/lib/mongodb";

export async function write({post}: { post: string }){
    try{
        await client.connect();
        let db = client.db("sample_mflix").collection("movies")
        console.log(await db.insertOne({
            "markdown":post
            //... MORE DATA
        }))
    }catch(err){

    }
    return null
}