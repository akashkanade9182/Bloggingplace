import axios from "axios"
import * as types from "./actionType"


const addPost=(payload,token)=>(dispatch)=>{
  dispatch({type:types.ADD_PRODUCT_REQUEST})
  return axios({
    method:`post`,
    url:`http://localhost:7000/blogs/addblog`,
    data:payload,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
}).then((r)=>{
dispatch({type:types.ADD_PRODUCT_SUCCESS})

}).catch((e)=>{
  dispatch({type:types.ADD_PRODUCT_FAILURE})
})
}


const getPost=(payload)=>(dispatch)=>{
  dispatch({type:types.GET_PRODUCTS_REQUEST})
  return axios.get("https://shy-erin-cricket-fez.cyclic.app/blogs/getallblogs",payload).then((r)=>{
    dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
  })
  .catch((e)=>{
    console.log(e)
  })
}

const getSinglePost=(id)=>(dispatch)=>{
  dispatch({type:types.GET_PRODUCTS_REQUEST1})
  return axios.get(`https://shy-erin-cricket-fez.cyclic.app/blogs/getallblogs/${id}`).then((r)=>{
    dispatch({type:types.GET_PRODUCTS_SUCCESS1,payload:r.data})
  })
  .catch((e)=>{
    dispatch({type:types.GET_PRODUCTS_FAILURE1})
  })
}



export {addPost,getPost,getSinglePost}