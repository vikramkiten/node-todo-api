const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
    console.log("Unable to connect to MongoDB server!");
}

console.log("All Done! You are good to go!");
 const db=client.db("TodoApp");
 //db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
 //    console.log(result);
 //})

//  db.collection('Todos').find({text:"Eat Lunch"}).count().then((count)=>{
//      while(count>1){
//          db.collection('Todos').deleteOne({text:"Eat Lunch"});
//          count--;
//          console.log("One document deleted!");
//      }
    
//  },(err)=>{
//     console.log('Unable to execute the function!');
//  }
// );

db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((result)=>{
    console.log("Results",result);
})

});