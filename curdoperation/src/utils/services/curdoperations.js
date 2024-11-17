import axios from "axios";
import axiosInstance from "../axiosInstance";


export const adduser = async(payload)=>{
try{
    const response = await axiosInstance.post("/api/adduser",payload);
    return response.data;

}catch(error){
    console.log(error);
}
}


export const getuser = async()=>{
    try{
        const response = await axiosInstance.get("/api/getuser");
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export const deleteuser = async(id)=>{
console.log(id);
    try{
     const response = await axiosInstance.delete(`/api/deleteuser/${id}`)
    }catch(error){
        console.log(error);
    }
}