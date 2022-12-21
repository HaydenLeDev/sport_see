import '../../style/components/home/Container.css';
import Title from './Title';
import { useParams } from "react-router-dom";
import { getUserById, getUserActivityById, getUserAverageSessions,
    getUserPerformance } from "../../service/mock/apiMock"
import Graphiques from '../graphiques/Graphiques';
import axios from 'axios'
function Container() {
    

const apiUrl = "http://localhost:3000/user/12"

axios.get(apiUrl).then((res)=> {
    console.log(res)
})
    const { id } = useParams()
    const infoUser = getUserById(parseInt(id))
    const userActivity = getUserActivityById(parseInt(id))
    const userAverageSessions = getUserAverageSessions(parseInt(id))
    const userPerformance = getUserPerformance(parseInt(id))
    const sessionUser = userActivity.sessions
    const isNiceDay = sessionUser[sessionUser.length-1].calories > sessionUser[sessionUser.length-2].calories

    return (
        <div className="Container">
            <Title name={infoUser.userInfos.firstName} isNiceDay={isNiceDay}/>
            <Graphiques infoUser={infoUser} sessionUser={sessionUser} userAverageSessions={userAverageSessions} userPerformance={userPerformance}/>
        </div>
    );
}

export default Container;
