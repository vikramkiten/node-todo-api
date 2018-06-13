let express=require('express');
let bodyparser=require('body-parser');
let {ObjectID}=require('mongodb')
const {mongoose}=require('./db/mongoose');

let {Todo}=require('./models/todo');
let {User}=require('./models/user');
let app=express();
app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
      text:req.body.text
  });
  todo.save().then((doc)=>{
      res.send(doc);
    
},(err)=>{
    
    res.status(status).send(err);
});
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
    res.send({
        todos
    });
    },(e)=>{
       res.status(400).send(e);
    })
})

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo)
        {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
});
app.listen(3000,()=>{
    console.log("You are good to go, mate!");
})