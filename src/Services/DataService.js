import axios from 'axios'

let header = {
    headers:{
        Authorization:"Bearer" + " " + localStorage.getItem("Token")
    }
}

export const getNotes =  () =>{
    let response =  axios.get("https://localhost:44373/api/Notes/Read", header)
    return response
}

export const addNote =  (noteObj) => {
    let response =  axios.post("https://localhost:44373/api/Notes/Create", noteObj, header);
    return response;
} 

export const setColor =  (obj) => {
    console.log(obj.color)
    let response =  axios.put(`https://localhost:44373/api/Notes/Color?NoteId=${obj.id}&color=${obj.color}`, obj, header);
    console.log(response)
    return response;
}

export const updateArchiveNotes = (obj) => {
    console.log(obj.id)
    let response =  axios.put(`https://localhost:44373/api/Notes/Archive?NoteID=${obj.id}`, obj, header);
    console.log(response)
    return response;
}
// export const updateNotes = (updateNotesObj) => {
//     let response = axios.put("https://localhost:44373/api/Notes/Update", updateNotesObj, header);
//     return response;
// }
export const deleteNotes = (obj) => {
    console.log(obj.id)
    let response =  axios.delete(`https://localhost:44373/api/Notes/Delete?NoteID=${obj.id}`, obj, header);
    console.log(response)
    return response;
}