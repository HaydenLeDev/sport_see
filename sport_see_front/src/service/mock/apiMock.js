/**
 * Mock API calls.
 */

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMock"

/**
 * Get user data
 * @param {string} id 
 * @returns data
 */
export function getUserById(id) {
    for (var i = 0; i < USER_MAIN_DATA.length; i++) {
        if (USER_MAIN_DATA[i].id === id) {
            return USER_MAIN_DATA[i]
        }
    }
}

/**
 * Get the activities of a user according to his id
 * @param {string} id 
 * @returns data
 */
export function getUserActivityById(id) {
    for (var i = 0; i < USER_ACTIVITY.length; i++) {
        if (USER_ACTIVITY[i].userId === id) {
            return USER_ACTIVITY[i]
        }
    }
}

/**
 * Get the times of each session for a user according to his id
 * @param {string} id 
 * @returns data
 */
export function getUserAverageSessions(id) {
    var userAverageSessions
    for (var i = 0; i < USER_AVERAGE_SESSIONS.length; i++) {
        if (USER_AVERAGE_SESSIONS[i].userId === id) {
            userAverageSessions = USER_AVERAGE_SESSIONS[i]
        }
    }

    for (var j = 0; j < userAverageSessions.sessions.length; j++) {
        switch (userAverageSessions.sessions[j].day) {
            case 1:
                userAverageSessions.sessions[j].day = "L"
                break
            case 2:
                userAverageSessions.sessions[j].day = "M"
                break
            case 3:
                userAverageSessions.sessions[j].day = "M"
                break
            case 4:
                userAverageSessions.sessions[j].day = "J"
                break
            case 5:
                userAverageSessions.sessions[j].day = "V"
                break
            case 6:
                userAverageSessions.sessions[j].day = "S"
                break
            case 7:
                userAverageSessions.sessions[j].day = "D"
                break
            default:
                userAverageSessions.sessions[j].day = "L"
                break
        }
    }

    return userAverageSessions
}

/**
 * Get user performance data based on his id. 
 * @param {string} id 
 * @returns data 
 */
export function getUserPerformance(id) {
    var userPerformance
    for (var i = 0; i < USER_PERFORMANCE.length; i++) {
        if (USER_PERFORMANCE[i].userId === id) {
            userPerformance = USER_PERFORMANCE[i]
        }
    }

    for (var j = 0; j < userPerformance.data.length; j++) {
        switch (userPerformance.data[j].kind) {
            case 1:
                userPerformance.data[j].kind = "Cardio"
                break
            case 2:
                userPerformance.data[j].kind = "Energy"
                break
            case 3:
                userPerformance.data[j].kind = "Endurance"
                break
            case 4:
                userPerformance.data[j].kind = "Strength"
                break
            case 5:
                userPerformance.data[j].kind = "Speed"
                break
            case 6:
                userPerformance.data[j].kind = "Intensity"
                break
        }
    }

    return userPerformance
}