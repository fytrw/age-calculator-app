import { useState } from 'react'
const DateComponent = ({ typeOfDate, shortcut, setDate, error, globalError}) => {

    const [value, setValue] = useState('')

    const handleValue = (e) => {

        if (typeOfDate === 'day' && e.target.value > 31) {
            
            return
        }
        setValue(e.target.value)
        setDate(e.target.value)
    }
    return (
        <>
        <div className="dateComponent">
            <p className={globalError ? 'globalError' : ''}>{typeOfDate}</p>
            <input
            type="text"
            maxLength={typeOfDate === 'year' ? 4 : 2}
            placeholder={shortcut}
            value={value}
            onChange={handleValue}
            className={globalError ? 'globalError' : ''}
            />
            {error && <div className="error">{error}</div>}
        </div>
        </>
    )
}

export default DateComponent
    