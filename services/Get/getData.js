import axios from "axios"
import {API_BASE_URL} from '../Config/config'
export const getData = async(endpoint)=>{
    try{
        const response = await axios.get(API_BASE_URL + endpoint);
        return response
    }catch(err){
        throw err;
    }
}