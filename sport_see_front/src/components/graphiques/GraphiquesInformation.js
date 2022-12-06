import GraphiquesDuree from "./GraphiquesDuree";

function GraphiquesInformation(props) {
    
    const userAverageSessions = props.userAverageSessions
    return (
        <div className="GraphiquesInformation">   
            <GraphiquesDuree userAverageSessions={userAverageSessions}/>
        </div>
    );
}

export default GraphiquesInformation;
