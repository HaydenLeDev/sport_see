import '../../style/components/graphiques/Graphiques.css';


/**
 * Custom tooltip for the bar chart.
 * @param {object} props 
 * @returns TooltipCustom
 */
function TooltipCustom(props) {

    const active = props.active
    const payload = props.payload

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

export default TooltipCustom;
