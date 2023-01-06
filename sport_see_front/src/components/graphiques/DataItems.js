import '../../style/components/graphiques/DataItem.css';

/**
 * A dataItem has a unit a text a number and an image.
 * @param {object} props 
 * @returns DataItem
 */
function DataItem(props) {

    const number = new Intl.NumberFormat("en-IN").format(props.number)
    const scrImage = props.scrImage
    const text = props.text
    const unite = props.unite

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

export default DataItem;
