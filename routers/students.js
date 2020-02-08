const route=require('express').Router();

let students=[
    {name:"vinay",subject:"web-d",college:"iit"},
    {name:"sumit",subject:"android",college:"iiit"},
    { name:"aman",subject:"competetive coding",college:"mait"}
]
route.get('/',function(req,res){res.send(students)});
route.get('/:id',function(req,res){res.send(students[req.params.id])})

module.export=route;