import '../../style/components/home/Container.css';
import Title from './Title';
import { useParams } from "react-router-dom";
//import {
//    getUserById, getUserActivityById, getUserAverageSessions,
//    getUserPerformance
//} from "../../service/mock/apiMock"
import Graphiques from '../graphiques/Graphiques';
import { getUserByIdApi, getUserActivityByIdApi, getUserAverageSessionsApi, getUserPerformanceApi } from '../../service/api/service'
import { useEffect, useState } from 'react';


/**
 * Contains all charts and initialize all data.
 * @returns Container
 */
function Container() {
    const { id } = useParams()

    const [infoUser, setInfoUser] = useState([]);
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSessions, setUserAverageSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
       const fetchData = async() => {
            const infoUserResult = await getUserByIdApi(id)
            setInfoUser(infoUserResult.data.data)

            const userActivityResult = await getUserActivityByIdApi(id)
            setUserActivity(userActivityResult.data.data)


            const userAverageSessionsResult = await getUserAverageSessionsApi(id)
            setUserAverageSessions(userAverageSessionsResult.data.data)

            const userPerformanceResult = await getUserPerformanceApi(id)
            setUserPerformance(userPerformanceResult.data.data)

            setLoading(false)
       }
       fetchData()
    }, [id])

    //const infoUser = getUserById(parseInt(id))
    //const userActivity = getUserActivityById(parseInt(id))
    //const userAverageSessions = getUserAverageSessions(parseInt(id))
    //const userPerformance = getUserPerformance(parseInt(id))
    
    if(loading){
        return (
            <div className="Container">
                <p>Loading...</p>
            </div>
        )
    } else{
        const sessionUser = userActivity.sessions
        const isNiceDay = sessionUser[sessionUser.length - 1].calories > sessionUser[sessionUser.length - 2].calories
        return (
            <div className="Container">
                <Title name={infoUser.userInfos.firstName} isNiceDay={isNiceDay}/>
                <Graphiques infoUser={infoUser} sessionUser={sessionUser} userAverageSessions={userAverageSessions} userPerformance={userPerformance} />
            </div>
        );
    }
       
}

export default Container
