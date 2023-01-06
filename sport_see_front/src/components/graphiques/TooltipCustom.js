import '../../style/components/graphiques/Graphiques.css';
import PropTypes from 'prop-types'


/**
 * Custom tooltip for the bar chart.
 * @param {bool} payload 
 * @param {array} active 
 * @returns TooltipCustom
 */
function TooltipCustom({active, payload}) {

    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="kilogramme">{`${payload[0].value}kg`}</p>
            <p className="calorie">{`${payload[1].value}Kcal`}</p>
          </div>
        )
      }

    return null
}

TooltipCustom.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default TooltipCustom;
