import '../../style/components/graphiques/DataItem.css';
import PropTypes from 'prop-types'

/**
 * A dataItem has a unit a text a number and an image.
 * @param {number} number 
 * @param {string} scrImage 
 * @param {string} text 
 * @param {string} unite 
 * @returns DataItem
 */
function DataItem({number, scrImage, text, unite}) {

    /*
    const number = new Intl.NumberFormat("en-IN").format(props.number)
    const scrImage = props.scrImage
    const text = props.text
    const unite = props.unite
    */
    return (
        <div className="DataItem">
            <img className="DataItem-Logo" src={scrImage} alt="Icone"></img>
            <div className="DataItem-Text">
                <p className="DataItem-Text-number">{number}{unite}</p>
                <p className="DataItem-Text-cat">{text}</p>
            </div>
        </div>
    );
}

DataItem.propTypes = {
    number: PropTypes.number.isRequired,
    scrImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    unite: PropTypes.string.isRequired
}

export default DataItem;
