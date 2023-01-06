import MenuHorizontal from "./MenuHorizontal"
import MenuVertical from "./MenuVertical"

/**
 * Contains both menu, vertical and horizontal.
 * @returns Header
 */
function Header() {
    return (
        <div className="Header">
            <MenuHorizontal />
            <MenuVertical />
        </div>
    )
}

export default Header;
