import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMock"

export function getUserById(id){
    for(var i = 0; i < USER_MAIN_DATA.length; i++){
        if (USER_MAIN_DATA[i].id === id){
            return USER_MAIN_DATA[i]
        }
    }
}