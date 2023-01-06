import '../../style/components/home/Title.css';

/**
 * Returns the title or the title plus a sentence depending on the performance of the user.
 * @param {object} propos 
 * @returns Title
 */
function Title(propos) {
    const name = propos.name
    const isNiceDay = propos.isNiceDay

    return isNiceDay ? (
        <div className="Title">
            <div className="Title-t">
                <h1>Bonjour</h1>
                <h1 className="Title-name">{name}</h1>
            </div>
            <p className="Title-p">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

    ) : (
        <div className="Title">
            <div className="Title-t">
                <h1>Bonjour</h1>
                <h1 className="Title-name">{name}</h1>
            </div>
        </div>

    )
}

export default Title;
