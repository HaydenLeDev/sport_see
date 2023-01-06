import { Link } from "react-router-dom";
import Logo from "./Logo"

/**
 * Horizontal menu
 * @returns MenuHorizontal
 */
function MenuHorizontal() {
    return (
        <div className="MenuHorizontal">
            <div className="MenuHorizontal-Layout">
                <Link to="/" className="MenuHorizontal-Logo"><Logo /></Link>
                <Link to="/" className="MenuHorizontal-Items">Accueil</Link>
                <Link to="/" className="MenuHorizontal-Items">Profil</Link>
                <Link to="/" className="MenuHorizontal-Items">Réglage</Link>
                <Link to="/" className="MenuHorizontal-Items">Communauté</Link>
            </div>
        </div>
    )
}

export default MenuHorizontal
