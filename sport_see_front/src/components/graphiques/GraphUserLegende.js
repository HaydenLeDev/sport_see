import '../../style/components/graphiques/GraphiquesLegend.css';

function GraphUserLegende() {

    return (
        <div className="GraphUserActivity_Informations">
            <div className="GraphUserActivity_Informations_titre">
                <h2>Activité quotidienne</h2>
            </div>
            <div className="GraphUserActivity_Informations_legend">
                <div className="GraphUserActivity_Informations_legend_info">
                    <span className="GraphUserActivity_Informations_legend_couleur noir"></span>
                    <p>Poids (kg)</p>
                </div>
                <div className="GraphUserActivity_Informations_legend_info">
                    <span className="GraphUserActivity_Informations_legend_couleur rouge"></span>
                    <p>Calories brûlées (kCal)</p>
                </div>
            </div>
        </div>
    );
}

export default GraphUserLegende;
