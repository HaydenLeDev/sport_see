/**
* Service making the various calls to the API.
*/

import axios from 'axios'

/**
 * Get user data
 * @param {string} id 
 * @returns {object} Response
 */
export const getUserByIdApi = async (id) => {
    try {
        const reponse = await axios(
            "http://localhost:3000/user/" + id,
        )
        return reponse
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get the activities of a user according to his id
 * @param {string} id 
 * @returns {object} Response
 */
export const getUserActivityByIdApi = async (id) => {
    try {
        const reponse = await axios(
            "http://localhost:3000/user/" + id + "/activity",
        )
        return reponse
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get the times of each session for a user according to his id
 * @param {string} id 
 * @returns {object} Response
 */
export const getUserAverageSessionsApi = async (id) => {
    try {
        const reponse = await axios(
            "http://localhost:3000/user/" + id + "/average-sessions",
        )
        return reponse
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get user performance data based on his id.
 * @param {string} id 
 * @returns {object} Response
 */
export const getUserPerformanceApi = async (id) => {
    try {
        const reponse = await axios(
            "http://localhost:3000/user/" + id + "/performance",
        )
        return reponse
    } catch (error) {
        console.log(error)
    }
}