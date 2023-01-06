import GraphiquesActivite from "./GraphiquesActivite";
import GraphiquesDuree from "./GraphiquesDuree";
import Score from "./Score";
import PropTypes from 'prop-types'

/**
 * Contains the 3 secondary graphics.
 * @param {object} userAverageSessions 
 * @param {object} infoUser 
 * @param {object} userPerformance 
 * @returns GraphiquesInformation
 */
function GraphiquesInformation({userAverageSessions, infoUser, userPerformance}) {
    return (
        <div className="GraphiquesInformation">   
            <GraphiquesDuree userAverageSessions={userAverageSessions}/>
            <GraphiquesActivite userPerformance={userPerformance}/>
            <Score infoUser={infoUser}/>
        </div>
    );
}

GraphiquesInformation.propTypes = {
    userAverageSessions: PropTypes.object.isRequired,
    infoUser: PropTypes.object.isRequired,
    userPerformance: PropTypes.object.isRequired
}

export default GraphiquesInformation
