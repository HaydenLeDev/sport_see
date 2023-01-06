import '../../style/components/graphiques/Graphiques.css';
import DataItem from './DataItems';
import iconeCal from "../../assets/icones_Alimentation/calories-icon.png"
import iconeProt from "../../assets/icones_Alimentation/protein-icon.png"
import iconeGlucide from "../../assets/icones_Alimentation/carbs-icon.png"
import iconeLipides from "../../assets/icones_Alimentation/fat-icon.png"

/**
 * Contains the list of food information.
 * @param {object} props 
 * @returns Alimentation
 */

function Alimentation(props) {
    
    const infoUser = props.infoUser

    return (
        <div className="Alimentation">   
            <DataItem scrImage={iconeCal} number={infoUser.keyData.calorieCount} unite="kCal" text="Calories"/>
            <DataItem scrImage={iconeProt} number={infoUser.keyData.proteinCount} unite="g" text="Proteines"/>
            <DataItem scrImage={iconeGlucide} number={infoUser.keyData.carbohydrateCount} unite="g" text="Glucides"/>
            <DataItem scrImage={iconeLipides} number={infoUser.keyData.lipidCount} unite="g" text="Lipides"/>
        </div>
    );
}

export default Alimentation;
