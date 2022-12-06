import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMock"

export function getUserById(id){
    for(var i = 0; i < USER_MAIN_DATA.length; i++){
        if (USER_MAIN_DATA[i].id === id){
            return USER_MAIN_DATA[i]
        }
    }
}

export function getUserActivityById(id){
    for(var i = 0; i < USER_ACTIVITY.length; i++){
        if (USER_ACTIVITY[i].userId === id){
            return USER_ACTIVITY[i]
        }
    }
}

export function getUserAverageSessions(id){
    for(var i = 0; i < USER_AVERAGE_SESSIONS.length; i++){
        if (USER_AVERAGE_SESSIONS[i].userId === id){
            return USER_AVERAGE_SESSIONS[i]
        }
    }
}