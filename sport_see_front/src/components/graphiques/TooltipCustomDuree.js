function TooltipCustomDuree(props) {

    const active = props.active
    const payload = props.payload

    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-duree">
            <p className="custom-tooltip-duree-min">{`${payload[0].value}min`}</p>
          </div>
        )
      }

    return null
}

export default TooltipCustomDuree;
