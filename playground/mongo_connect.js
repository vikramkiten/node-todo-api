const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
    console.log("Unable to connect to MongoDB server!");
}

console.log("All Done! You are good to go!");
// const db=client.db("TodoApp");
// db.collection('Todos').insertOne({
//     text:"Complete React Course",
//     completed:false
// },(err,result)=>{
//     if(err)
//     {
//         return console.log("Unable to insert to do",err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });
const db=client.db("TodoApp");
db.collection('users').insertOne({
 Name:"Vikram Bezawada",
 Age:20,
 Location:"Andhra Pradesh"
},(err,result)=>{
    if(err)
    {
        return console.log("Unable to insert to do",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});


});