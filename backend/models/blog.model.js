const mongoose=require("mongoose")


const blogSchema=mongoose.Schema({
   
    title: {type:String,require:true},
    image: {type:String,require:true},
   
    category:{type:String,require:true},
     date:{type:Date,require:true},
    content:{type:String,require:true},
 
  
  

   
   
 
})

const Blogmodel=mongoose.model("blogs",blogSchema);

module.exports=Blogmodel;