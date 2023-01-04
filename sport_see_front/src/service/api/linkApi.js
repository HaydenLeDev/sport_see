import axios from 'axios'


export const getUserByIdApi = async(id) =>{
    try{
        const reponse = await axios(
            "http://localhost:3000/user/" + id,
        )
        return reponse
    } catch(error){
        console.log(error)
    }
}

export const getUserActivityByIdApi = async(id) =>{
    try{
        const reponse = await axios(
            "http://localhost:3000/user/"+ id + "/activity",
        )
        return reponse
    } catch(error){
        console.log(error)
    }
}

export const getUserAverageSessionsApi = async(id) =>{
    try{
        const reponse = await axios(
            "http://localhost:3000/user/"+ id + "/average-sessions",
        )
        return reponse
    } catch(error){
        console.log(error)
    }
}

export const getUserPerformanceApi = async(id) =>{
    try{
        const reponse = await axios(
            "http://localhost:3000/user/"+ id + "/performance",
        )
        return reponse
    } catch(error){
        console.log(error)
    }
}