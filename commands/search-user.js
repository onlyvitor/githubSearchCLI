import axios from "axios";
import { formatUser } from "../utils/formatter.js";

export async function getUser(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        return formatUser(response.data);
    }catch(error){
        return console.log(error);
    }
}

export async function getUserActivity(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}/events`);
        return response.data;
    }catch(error){
        return console.log(error);
    }
}