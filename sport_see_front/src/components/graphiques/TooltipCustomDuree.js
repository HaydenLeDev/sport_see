import PropTypes from 'prop-types'

/**
 * Custom tooltip for average duration chart.
 * @param {object} props 
 * @returns TooltipCustomDuree
 */

function TooltipCustomDuree({active, payload}) {
  
    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-duree">
            <p className="custom-tooltip-duree-min">{`${payload[0].value} min`}</p>
          </div>
        )
      }

    return null
}

TooltipCustomDuree.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

export default TooltipCustomDuree;
