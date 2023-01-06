/**
 * Legend for the score graph.
 * @param {object} props 
 * @returns ScoreLegend
 */

function ScoreLegend(props) {
    const score = props.score
    

    return (
        <div className="Score-legend">
            <p className="Score-legend-pourcentage">{score}%</p>
            <p className="Score-legend-text">de votre <br></br>objectif</p>
        </div>
    );
}

export default ScoreLegend;
