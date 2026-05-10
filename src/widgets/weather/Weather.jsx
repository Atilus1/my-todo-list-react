import styles from './Weather.module.scss'
import SearchCityForm from '../../features/search-city/SearchCityForm.jsx'
import { useState, useEffect } from 'react'
import WeatherUI from '../../entities/weather/ui/WeatherUI.jsx'

const Weather = () => {

  const [newCityTitle, setNewCityTitle] = useState(() => {
    const savedCity = localStorage.getItem('City')
    if (savedCity) {
      return JSON.parse(savedCity)
    }
    return ('')
  })

  const [city, setCity] = useState('')

  
    const addCity = () => {
        if (newCityTitle.trim().length > 0) {
          const newCity = {
            title: newCityTitle, /* это переменная название города окончательное */
          }

          setCity([...city, newCity])
        }
        
      }


    useEffect( () => {
      localStorage.setItem('City', JSON.stringify(newCityTitle))
    }, [newCityTitle])

    const API_Key1 = "6800ac57984e6fed16999888dc1f8d78"
const API_Key2 = "28caf74b45ba4302ad0100547260905"

let [temp2, setTemp2] = useState()
let [temp5, setTemp5] = useState()
let [temp8, setTemp8] = useState()
let [temp11, setTemp11] = useState()
let [temp14, setTemp14] = useState()
let [temp17, setTemp17] = useState()
let [temp20, setTemp20] = useState()
let [temp23, setTemp23] = useState()

let [weatherImg2, setweatherImg2] = useState()
let [weatherImg5, setweatherImg5] = useState()
let [weatherImg8, setweatherImg8] = useState()
let [weatherImg11, setweatherImg11] = useState()
let [weatherImg14, setweatherImg14] = useState()
let [weatherImg17, setweatherImg17] = useState()
let [weatherImg20, setweatherImg20] = useState()
let [weatherImg23, setweatherImg23] = useState()

let [wind2, setwind2] = useState()
let [wind5, setwind5] = useState()
let [wind8, setwind8] = useState()
let [wind11, setwind11] = useState()
let [wind14, setwind14] = useState()
let [wind17, setwind17] = useState()
let [wind20, setwind20] = useState()
let [wind23, setwind23] = useState()

let [isVisible, setisVisible] = useState(false)


const getWither = () => {
  fetch (`http://api.weatherapi.com/v1/forecast.json?key=${API_Key2}&q=${newCityTitle}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    setTemp2(temp2 = data.forecast.forecastday[0].hour[2].temp_c + " °C")
    setTemp5(temp5 = data.forecast.forecastday[0].hour[5].temp_c + " °C")
    setTemp8(temp8 = data.forecast.forecastday[0].hour[8].temp_c + " °C")
    setTemp11(temp11 = data.forecast.forecastday[0].hour[11].temp_c + " °C")
    setTemp14(temp14 = data.forecast.forecastday[0].hour[14].temp_c + " °C")
    setTemp17(temp17 = data.forecast.forecastday[0].hour[17].temp_c + " °C")
    setTemp20(temp20 = data.forecast.forecastday[0].hour[20].temp_c + " °C")
    setTemp23(temp23 = data.forecast.forecastday[0].hour[23].temp_c + " °C")
    setweatherImg2(weatherImg2 = data.forecast.forecastday[0].hour[2].condition.icon)
    setweatherImg5(weatherImg5 = data.forecast.forecastday[0].hour[5].condition.icon)
    setweatherImg8(weatherImg8 = data.forecast.forecastday[0].hour[8].condition.icon)
    setweatherImg11(weatherImg11 = data.forecast.forecastday[0].hour[11].condition.icon)
    setweatherImg14(weatherImg14 = data.forecast.forecastday[0].hour[14].condition.icon)
    setweatherImg17(weatherImg17 = data.forecast.forecastday[0].hour[17].condition.icon)
    setweatherImg20(weatherImg20 = data.forecast.forecastday[0].hour[20].condition.icon)
    setweatherImg23(weatherImg23 = data.forecast.forecastday[0].hour[23].condition.icon)
    setwind2(wind2 = Math.round(data.forecast.forecastday[0].hour[2].wind_kph / 3.6)+ " м/c")
    setwind5(wind5 = Math.round(data.forecast.forecastday[0].hour[5].wind_kph / 3.6)+ " м/c")
    setwind8(wind8 = Math.round(data.forecast.forecastday[0].hour[8].wind_kph / 3.6)+ " м/c")
    setwind11(wind11 = Math.round(data.forecast.forecastday[0].hour[11].wind_kph / 3.6)+ " м/c")
    setwind14(wind14 = Math.round(data.forecast.forecastday[0].hour[14].wind_kph / 3.6)+ " м/c")
    setwind17(wind17 = Math.round(data.forecast.forecastday[0].hour[17].wind_kph / 3.6)+ " м/c")
    setwind20(wind20 = Math.round(data.forecast.forecastday[0].hour[20].wind_kph / 3.6)+ " м/c")
    setwind23(wind23 = Math.round(data.forecast.forecastday[0].hour[23].wind_kph / 3.6)+ " м/c")
    setisVisible(isVisible = true)
  }
)
}
    
    return (
        <div className={styles.weather}>
            <h1 className={styles.title}>Погода сегодня</h1>
          <SearchCityForm 
          styles={styles}
          addCity={addCity}
          getWither={getWither}
          newCityTitle={newCityTitle}
          setNewCityTitle={setNewCityTitle}
          />
          <WeatherUI
          temp2={temp2}
          temp5={temp5}
          temp8={temp8}
          temp11={temp11}
          temp14={temp14}
          temp17={temp17}
          temp20={temp20}
          temp23={temp23}

          weatherImg2={weatherImg2}
          weatherImg5={weatherImg5}
          weatherImg8={weatherImg8}
          weatherImg11={weatherImg11}
          weatherImg14={weatherImg14}
          weatherImg17={weatherImg17}
          weatherImg20={weatherImg20}
          weatherImg23={weatherImg23}

          wind2={wind2}
          wind5={wind5}
          wind8={wind8}
          wind11={wind11}
          wind14={wind14}
          wind17={wind17}
          wind20={wind20}
          wind23={wind23}

          isVisible={isVisible}
          >
          </WeatherUI>
        </div>
    )
}

export default Weather