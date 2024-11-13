export const result = async()=>{
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export const getusers = async(payload)=>{
    let data = await fetch(`https://dummyjson.com/users/${payload}`)
    data  = await data.json();
    return data;
}