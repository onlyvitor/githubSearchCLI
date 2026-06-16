import axios from "axios";

export async function getUser(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        return response.data;
    }catch(error){
        return console.log(error);
    }
}

