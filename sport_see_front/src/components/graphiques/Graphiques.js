import '../../style/components/graphiques/Graphiques.css';
import Alimentation from './Alimentation';
import GraphUserActivity from './GraphUserActivity';
import GraphiquesInformation from './GraphiquesInformation';
import PropTypes from 'prop-types'

/**
 * Contains all charts and feed information.
 * @param {object} infoUser 
 * @param {array} sessionUser 
 * @param {object} userAverageSessions 
 * @param {object} userPerformance 
 * @returns Graphics and the power supply part
 */
function Graphiques({infoUser, sessionUser, userAverageSessions, userPerformance}) {
    
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

Graphiques.propTypes = {
    infoUser: PropTypes.object.isRequired,
    sessionUser: PropTypes.array.isRequired,
    userAverageSessions: PropTypes.object.isRequired,
    userPerformance: PropTypes.object.isRequired,
}

export default Graphiques;
