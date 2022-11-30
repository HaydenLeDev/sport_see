import logoLink from "../../assets/logo.png" 

function Logo() {
    return (
        <div className="Logo">
            <img src={logoLink} className="Logo-image" alt="Logo"></img>
        </div>
    );
}

export default Logo;
