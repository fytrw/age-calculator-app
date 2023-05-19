import './styles.css'
import ResultDateContainer from './components/resultDateContainer'
import DateComponent from './components/dateComponent'
import { ReactComponent as IconArrow } from './assets/icon-arrow.svg'

import { useState } from 'react'


function App() {

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [dayError, setDayError] = useState(false)
  const [monthError, setMonthError] = useState(false)
  const [yearError, setYearError] = useState(false)
  const [globalError, setGlobalError] = useState(false)

  const [resultDay, setResultDay] = useState('')
  const [resultMonth, setResultMonth] = useState('')
  const [resultYear, setResultYear] = useState('')

  const handleDay = (e) => {
    setDay(e)
  }

  const handleMonth = (e) => {
    setMonth(e)
  }

  const handleYear = (e) => {
    setYear(e)
  }

  const handleClick = (e) => {
    e.preventDefault()
    let hasError = false; 

    if (day === '') {
      setDayError('This field is required')
      setGlobalError(true)
      hasError = true;
    } else if(day > 31 || day < 1) {
      setDayError('Must be a valid day')
      setGlobalError(true)
      hasError = true;
    } else {
      setDayError(false)
    }
    
    if (month === '') {
      setMonthError('This field is required')
      setGlobalError(true)
      hasError = true;
    } else if(month > 12 || month < 1) {
      setMonthError('Must be a valid month')
      setGlobalError(true)
      hasError = true;
    } else {
      setMonthError(false)
    }
    
    if (year === '') {
      setYearError('This field is required')
      setGlobalError(true)
      hasError = true;
    } else if(year > 2023 || year < 100) { 
      setYearError('Must be in the past')
      setGlobalError(true)
      hasError = true;
    } else {
      setYearError(false)
    }
    
    if(hasError) {
      setResultDay('')
      setResultMonth('')
      setResultYear('')
      return; 
    }
    
    setGlobalError(false)

    //calculate the date of birth
    const dateOfBirth = new Date(`${year}-${month}-${day}`)
    //calculate the current date
    const currentDate = new Date()
    //calculate the difference between the current date and the date of birth
    const difference = currentDate - dateOfBirth
    //calculate the age - years, months, days
    const age = new Date(difference)
    //calculate the age - years
    const ageYears = age.getFullYear() - 1970
    ageYears == 0 ? setResultYear('0') : setResultYear(ageYears)
    //calculate the age - months
    const ageMonths = age.getMonth()
    setResultMonth(ageMonths)
    ageMonths == 0 ? setResultMonth('0') : setResultMonth(ageMonths)
    //calculate the age - days
    const ageDays = age.getDate() - 1
    setResultDay(ageDays)
    ageDays == 0 ? setResultDay('0') : setResultDay(ageDays)
  }

  return (
    <div className='wrapper'>
      <div className='mainContainer'>
        <form onSubmit={handleClick}>
        <div className="birthDateFormContainer">
          <DateComponent typeOfDate={'day'} shortcut={'dd'} setDate={handleDay} error={dayError} globalError={globalError}/>
          <DateComponent typeOfDate={'month'} shortcut={'mm'} setDate={handleMonth} error={monthError} globalError={globalError}/>
          <DateComponent typeOfDate={'year'} shortcut={'yyyy'} setDate={handleYear} error={yearError} globalError={globalError} />
        </div>
        <div className="count">
          <div className="line"></div>
          <button className="btn" type="submit"><IconArrow/></button>
        </div>
        </form>
        <ResultDateContainer resultDay={resultDay} resultMonth={resultMonth} resultYear={resultYear} />
      </div>
    </div>
  )
}

export default App
