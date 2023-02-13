const express=require("express");




const Blogmodel=require("../models/blog.model")





const blogRouter=express.Router();


blogRouter.get("/",async(req,res)=>{
    let query=req.query;
    let sortorder;
    if(req.query._order){
        if(req.query._order==="asc"){
            sortorder=1
        }else{
            sortorder=-1
        }
    }else{
        sortorder
    }
    let filter={};
    query.category && (filter.category=query.category);
    query.brand && (filter.brand={ $in: query.brand});
    query.price_lte && (filter.price={ $gt: 0, $lt: query.price_lte })

    let todos
    if(query._sort){
        todos=await blogmodel.find(filter).sort({price:sortorder});
    }else{
        todos=await blogmodel.find(filter);
    }
    res.send(todos)

})

blogRouter.get("/homepage",async(req,res)=>{
      try { let todos
        let query=req.query;
        let filter={};
        query.category && (filter.category=query.category);
        query.brand && (filter.brand={ $in: query.brand});
        query.price_lte && (filter.price={ $gt: 0, $lt: query.price_lte })
        let startindex=(query.page-1)*query.limit;
        todos=await blogmodel.find(filter).sort({_id: -1}).skip(startindex).limit(query.limit);
    res.status(200).send(todos)}
    catch(e){
        res.status(400).send("error to get item")
    }

    
})

blogRouter.get("/title",async(req,res)=>{
    let query=req.query;
    
   try{
 let result=await blogmodel.find({title:{$regex:query.title,$options:'i'}})
 res.send(result)
   }
   catch(e){
    res.status(400).json({ message: 'Invalid data provided' })
   }
   



})


blogRouter.post("/",async(req,res)=>{
 try{
    let data=req.body;
    let todos=new blogmodel(data);
    await todos.save();
    res.status(200).send("product added successfully")
 }
 catch(e){
    res.status(400).send("error in product add")
 }
})

blogRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
    let todos=await blogmodel.findById({_id:id});
    console.log(id)
    res.send(todos)

})



blogRouter.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    let payload=req.body;
  
    await blogmodel.findOneAndUpdate({_id:id},payload)
    const note = await blogmodel.find()
    res.send(note)
})

blogRouter.delete("/:id",async(req,res)=>{
    const id=req.params.id;
  try{
    await blogmodel.findByIdAndDelete({_id:id})
    const note = await blogmodel.findOne({_id:id})
    res.status(200).send("products is deleted")
  }
  catch(e){
    res.status(400).send("error in delete product")
  }
  
 
})




module.exports=blogRouter