const route=require('express').Router()

let teachers=[
    {name:"Arnav",subject:"web-d"},
    {name:"Mohit",subject:"android"},
    {name:"rohit",subject:"competetive coding"}
]
route.get('/',function(req,res){res.send(teachers)}
);
route.get('/:id',function(req,res) {
res.send(teachers[req.params.id])});
module.export=route;