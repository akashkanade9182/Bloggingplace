import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';





const getLogin=(payload,toast,navigate)=>(dispatch)=>{
     dispatch({type:types.LOGIN_REQUEST})

    return axios.post("http://localhost:7000/bloguser/login",payload).then((r)=>{
     if(r.data.token){
       dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
       toast({
        position: 'top-center',
        render: () => (
          <div style={{backgroundColor:" #272150",borderRadius:"9px" ,display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px",height:"50px",color:"white"}}>
            Login successfull
          </div>
        ),
      })
      navigate("/")
      
        
     }
        // console.log(r.data.token)
    }).catch((e)=>{
        console.log(e)
        toast({
          position: 'top-center',
          render: () => (
            <div style={{backgroundColor:" red" ,color:"white"}}>
             Error in login successfull
            </div>
          ),
        })
    })
}

export {getLogin};