import logoLink from "../../assets/logo.png"

/**
 * Contains the app logo.
 * @returns Logo
 */
function Logo() {
    return (
        <div className="Logo">
            <img src={logoLink} className="Logo-image" alt="Logo"></img>
        </div>
    )
}

export default Logo
