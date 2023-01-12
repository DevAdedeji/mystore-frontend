import axios from "axios"
import {API_BASE_URL} from '../Config/config'
export const postData = async (endpoint:string, data:object)=>{
    try{
        const response = await axios.post(API_BASE_URL + endpoint, data);
        return response
    }catch(err){
        throw err;
    }
}

