import PropTypes from 'prop-types'

/**
 * Legend for the score graph.
 * @param {number} score 
 * @returns ScoreLegend
 */

function ScoreLegend({score}) {
    
    return (
        <div className="Score-legend">
            <p className="Score-legend-pourcentage">{score}%</p>
            <p className="Score-legend-text">de votre <br></br>objectif</p>
        </div>
    );
}

ScoreLegend.propTypes = {
    score: PropTypes.number.isRequired
}

export default ScoreLegend;
