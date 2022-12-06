import GraphiquesActivite from "./GraphiquesActivite";
import GraphiquesDuree from "./GraphiquesDuree";

function GraphiquesInformation(props) {
    
    const userAverageSessions = props.userAverageSessions
    const userPerformance = props.userPerformance

    return (
        <div className="GraphiquesInformation">   
            <GraphiquesDuree userAverageSessions={userAverageSessions}/>
            <GraphiquesActivite userPerformance={userPerformance}/>
        </div>
    );
}

export default GraphiquesInformation;
