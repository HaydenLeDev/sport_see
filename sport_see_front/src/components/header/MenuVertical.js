import logoYogaLink from "../../assets/icon_yoga.png"
import logoNatationLink from "../../assets/icon_natation.png"
import logoVeloLink from "../../assets/icon_velo.png"
import logoMusculationLink from "../../assets/icon_musculation.png"


/**
 * Contains the different elements of the vertical menu.
 * @returns MenuVertical
 */
function MenuVertical() {
    return (
        <div className="MenuVertical">
            <div className="MenuVertical-Layout">
                <input type="image" src={logoYogaLink} alt="Logo yoga"></input>
                <input type="image" src={logoNatationLink} alt="Logo natation"></input>
                <input type="image" src={logoVeloLink} alt="Logo velo"></input>
                <input type="image" src={logoMusculationLink} alt="Logo musculation"></input>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default MenuVertical