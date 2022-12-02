import '../../style/components/graphiques/Graphiques.css';
import Alimentation from './Alimentation';
import GraphUserActivity from './GraphUserActivity';

function Graphiques(props) {
    
    const infoUser = props.infoUser
    const sessionUser = props.sessionUser
    
    return (
        <div className="Graphiques">   
            <div className="Graphiques-graph">
                <GraphUserActivity sessionUser={sessionUser}/>
            </div>
            <Alimentation infoUser={infoUser} />
        </div>
    );
}

export default Graphiques;
