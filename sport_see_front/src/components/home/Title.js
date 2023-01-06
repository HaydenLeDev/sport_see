import '../../style/components/home/Title.css';
import PropTypes from 'prop-types'

/**
 * Returns the title or the title plus a sentence depending on the performance of the user.
 * @param {string} name 
 * @param {bool} isNiceDay 
 * @returns Title
 */
function Title({ name, isNiceDay }) {
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

Title.propTypes = {
    name: PropTypes.string.isRequired,
    isNiceDay: PropTypes.bool.isRequired
}

export default Title