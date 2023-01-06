import '../../style/components/graphiques/Graphiques.css';
import Alimentation from './Alimentation';
import GraphUserActivity from './GraphUserActivity';
import GraphiquesInformation from './GraphiquesInformation';

/**
 * Contains all charts and feed information.
 * @param {object} props 
 * @returns Graphics and the power supply part
 */
function Graphiques(props) {
    
    const infoUser = props.infoUser
    const sessionUser = props.sessionUser
    const userAverageSessions = props.userAverageSessions
    const userPerformance = props.userPerformance
    
    return (
        <div className="Graphiques">   
            <div className="Graphiques-graph">
                <GraphUserActivity sessionUser={sessionUser}/>
                <GraphiquesInformation infoUser={infoUser} userAverageSessions={userAverageSessions} userPerformance={userPerformance}/>
            </div>
            <Alimentation infoUser={infoUser} />
        </div>
    );
}

export default Graphiques;
