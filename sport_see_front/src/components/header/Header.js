import Menu from "./MenuHorizontal"
import MenuVertical from "./MenuVertical"

function Header() {
    return (
        <div className="Header">
            <Menu />
            <MenuVertical />
        </div>
    );
}

export default Header;
