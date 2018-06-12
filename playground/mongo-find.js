const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
    console.log("Unable to connect to MongoDB server!");
}

console.log("All Done! You are good to go!");
 const db=client.db("TodoApp");
 db.collection('Todos').find({completed:false}).count().then((count)=>{
     console.log("Todos",count);
 //    console.log(JSON.stringify(docs,undefined,2));
 },(err)=>{
     console.log("Unable to fetch the results");
 })
})