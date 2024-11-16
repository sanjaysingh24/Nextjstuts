import axiosInstance from "../axiosInstance";


export const adduser = async(payload)=>{
try{
    const response = await axiosInstance.post("/api/adduser",payload);
    return response.data;

}catch(error){
    console.log(error);
}
}