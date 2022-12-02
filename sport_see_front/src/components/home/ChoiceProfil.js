import '../../style/components/header/Header.css';
import { Link } from "react-router-dom";


function ChoiceProfil() {

    return (
        <div className="ChoiceProfil">
            <nav className="ChoiceProfil-Menu">
                <Link to="/user/12" className="ChoiceProfil-Menu-Items">Karl</Link>
                <Link to="/user/18" className="ChoiceProfil-Menu-Items">Cecilia</Link>
            </nav>
        </div>
    );
}

export default ChoiceProfil;
