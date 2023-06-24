import axios from "axios"
import {LoginType} from "../actionType"

export const GetLoginData=()=>async(dispatch)=>
{
    dispatch({ type:LoginType.LOGIN_REQUEST })
    try {
        axios.get("").then((response)=>{
            console.log("GET Response",response.data.data)
            dispatch({
                type:LoginType.LOGIN_SUCESS,
                payload:response.data.data,
            })
        })  
    }
    catch(err)
    {
        console.log("Get_Error",err)
        dispatch({type:LoginType.LOGIN_ERROR,payload:err})
    }
}