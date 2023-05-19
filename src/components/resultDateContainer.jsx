export default function resultDateContainer({ resultDay, resultMonth, resultYear}) {
    return (
        <div className="resultDateContainer">
            <div className="resultDate">
                <p>{resultYear == '' ? '--' : resultYear}</p>
                <p>years</p>
            </div>
            <div className="resultDate">
                <p>{resultMonth == '' ? '--' : resultMonth }</p>
                <p>months</p>
            </div>
            <div className="resultDate">
                <p>{resultDay == '' ? '--' : resultDay}</p>
                <p>days</p>
            </div>
        </div>
    )
}