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

export {addPost}