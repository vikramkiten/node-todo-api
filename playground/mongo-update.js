const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
    console.log("Unable to connect to MongoDB server!");
}

console.log("All Done! You are good to go!");
 const db=client.db("TodoApp");
 db.collection('Todos').findOneAndUpdate(
     {
         text:"Don't leave it Halfway"
     },
    {
        $set:{
            text:"Complete React Course"
        }
    },
{
    returnOrginal:true
}).then((result)=>{
    console.log(result);
})

});