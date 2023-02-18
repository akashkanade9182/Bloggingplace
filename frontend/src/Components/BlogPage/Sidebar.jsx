import { Box } from '@chakra-ui/react'
import React ,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

import "../../Styles/Sidebar.css"

const array=[
  {
  title: "Education",
  value: "education"
},
{
  title:"Nature" ,
  value: "nature"
},
{
  title: "Food",
  value: "food"
},
{
  title: "Fitness",
  value: "fitness"
},
{
  title:"Sports" ,
  value: "sports"
},
{
  title:"News" ,
  value: "news"
},
{
  title: "Movies" ,
  value: "movies"
},
{
  title: "Polytical",
  value: "polytical"
},
{
  title: "Travel",
  value: "travel"
},
{
  title: "Technology",
  value: "tchnology"
},
{
  title:"Finance" ,
  value: "finance"
}

]

const Sidebar = () => {
  const [searchParams,setSeachParams]=useSearchParams()
  const [category,setCategory]=useState(searchParams.getAll("catgeory"))

  const handleChange=(e)=>{
let newCategory=[...category];

    let option=e.target.value;
    if(newCategory.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1)
    }else{
     newCategory.push(option)
    }
 setCategory(newCategory)

  }
  useEffect(()=>{
 let params={}
 category && (params.category=category)
 setSeachParams(params)
  },[category,setSeachParams])

  return (
    <Box w="20%" className="sideBox" borderRadius={"15px"} h="1000px"  border={"1px solid blueviolet"}>
{

array.map((ele,index)=>(
  <Box className='catbox' borderBottom="1px solid blueviolet" h="50px" alignItems={"center"} color="white" p="0 15px" display={"flex"} justifyContent="space-between" key={ele.value}>
    <h1 style={{fontSize:"25px"}}>{ele.title}</h1>
         <input type="checkbox" onChange={handleChange} value={ele.value} />
  </Box>
))

}

    </Box>
  )
}

export default Sidebar