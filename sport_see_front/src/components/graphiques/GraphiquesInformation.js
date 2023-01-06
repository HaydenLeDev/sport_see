import GraphiquesActivite from "./GraphiquesActivite";
import GraphiquesDuree from "./GraphiquesDuree";
import Score from "./Score";

/**
 * Contains the 3 secondary graphics.
 * @param {object} props 
 * @returns GraphiquesInformation
 */
function GraphiquesInformation(props) {
    const userAverageSessions = props.userAverageSessions
    const infoUser = props.infoUser
    const userPerformance = props.userPerformance


    return (
        <div className="GraphiquesInformation">   
            <GraphiquesDuree userAverageSessions={userAverageSessions}/>
            <GraphiquesActivite userPerformance={userPerformance}/>
            <Score infoUser={infoUser}/>
        </div>
    );
}

export default GraphiquesInformation;
