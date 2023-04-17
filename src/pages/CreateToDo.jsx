const CreateTodo = () =>{
    return(
        const ToDoList = require("../models/ToDoList");
const {Router}= require("express");
const todoRouter= Router();

console.log(222)
const createToDo = async (req,res,next)=>{
    console.log(1111)
    const {todo}= req.body;
    try{
        const newTodo= await ToDoList.create({
            todo
        })
        res.json({data:newTodo})
    }catch(e){
        next(e);
    }
}

getTodo = async (req,res,next)=>{
    try{
        const todos= await ToDoList.find({})
        res.json({data:todos})
    }catch(e){
        next(e);
    }
}

todoRouter.post("/",createToDo)
todoRouter.get("/")

module.exports=todoRouter;

    );
};

export default CreateTodo;