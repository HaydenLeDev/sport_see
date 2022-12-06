import '../../style/components/graphiques/Graphiques.css';
import Alimentation from './Alimentation';
import GraphUserActivity from './GraphUserActivity';
import GraphiquesInformation from './GraphiquesInformation';

function Graphiques(props) {
    
    const infoUser = props.infoUser
    const sessionUser = props.sessionUser
    const userAverageSessions = props.userAverageSessions
    
    return (
        <div className="Graphiques">   
            <div className="Graphiques-graph">
                <GraphUserActivity sessionUser={sessionUser}/>
                <GraphiquesInformation userAverageSessions={userAverageSessions}/>
            </div>
            <Alimentation infoUser={infoUser} />
        </div>
    );
}

export default Graphiques;
