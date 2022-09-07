import axios from 'axios'

export const signIn = async (obj) => {
    let response = await axios.post("https://localhost:44373/api/User/Login",obj)
    return response;
}

export const signUp = async (obj) => {
    let response = await axios.post("https://localhost:44373/api/User/Register",obj)
    return response;
}