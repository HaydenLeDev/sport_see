import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./dataMock"

export function getUserById(id) {
    for (var i = 0; i < USER_MAIN_DATA.length; i++) {
        if (USER_MAIN_DATA[i].id === id) {
            return USER_MAIN_DATA[i]
        }
    }
}

export function getUserActivityById(id) {
    for (var i = 0; i < USER_ACTIVITY.length; i++) {
        if (USER_ACTIVITY[i].userId === id) {
            return USER_ACTIVITY[i]
        }
    }
}

export function getUserAverageSessions(id) {
    var userAverageSessions
    for (var i = 0; i < USER_AVERAGE_SESSIONS.length; i++) {
        if (USER_AVERAGE_SESSIONS[i].userId === id) {
            userAverageSessions = USER_AVERAGE_SESSIONS[i]
        }
    }

    for (var i = 0; i < userAverageSessions.sessions.length; i++) {
        console.log(userAverageSessions.sessions[i].day)
        switch (userAverageSessions.sessions[i].day) {
            case 1:
                userAverageSessions.sessions[i].day = "L"
                break
            case 2:
                userAverageSessions.sessions[i].day = "M"
                break
            case 3:
                userAverageSessions.sessions[i].day = "M"
                break
            case 4:
                userAverageSessions.sessions[i].day = "J"
                break
            case 5:
                userAverageSessions.sessions[i].day = "V"
                break
            case 6:
                userAverageSessions.sessions[i].day = "S"
                break
            case 7:
                userAverageSessions.sessions[i].day = "D"
                break
        }
    }

    return userAverageSessions
}

export function getUserPerformance(id){
    for (var i = 0; i < USER_PERFORMANCE.length; i++) {
        if (USER_PERFORMANCE[i].userId === id) {
            return USER_PERFORMANCE[i]
        }
    }
}