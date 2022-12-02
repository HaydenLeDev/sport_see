import '../../style/components/home/Container.css';
import Title from './Title';
import { useParams } from "react-router-dom";
import { getUserById, getUserActivityById } from "../../service/mock/apiMock"
import Graphiques from '../graphiques/Graphiques';

function Container() {
    const { id } = useParams()
    const infoUser = getUserById(parseInt(id))
    const userActivity = getUserActivityById(parseInt(id))
    const sessionUser = userActivity.sessions
    const isNiceDay = sessionUser[sessionUser.length-1].calories > sessionUser[sessionUser.length-2].calories

    return (
        <div className="Container">
            <Title name={infoUser.userInfos.firstName} isNiceDay={isNiceDay}/>
            <Graphiques infoUser={infoUser} sessionUser={sessionUser}/>
        </div>
    );
}

export default Container;
