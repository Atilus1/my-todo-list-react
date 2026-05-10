import styles from './WeatherUI.module.scss'

const WeatherUI = (props) => {
    const { 
        temp2,
        temp5,
        temp8,
        temp11,
        temp14,
        temp17,
        temp20,
        temp23,
        weatherImg2,
        weatherImg5,
        weatherImg8,
        weatherImg11,
        weatherImg14,
        weatherImg17,
        weatherImg20,
        weatherImg23,
        wind2, 
        wind5, 
        wind8,
        wind11, 
        wind14, 
        wind17, 
        wind20, 
        wind23,
        isVisible,
    } = props

/*     if (weatherImg == undefined) {}

    else if (weather == clear) {weatherImg = "src\shared\assets\icons\weather_images\clearsun.png"}
    else if (weather == clouds) {weatherImg = "src\shared\assets\icons\weather_images\clouds.png"}
    else if (weather == rainy) {weatherImg = "src\shared\assets\icons\weather_images\cloudsunrainy.png"}
    else if (weather == bigRain) {weatherImg = "src\shared\assets\icons\weather_images\cloudsunbigrain.png"}
    else if (weather == rainStorm) {weatherImg = "src\shared\assets\icons\weather_images\rainstorm.png"}

    else {} */

return (
<div className={styles.column}><h3>Температура °C</h3>
<div className={styles.row}>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>2:00</p>
        <img src={weatherImg2} alt="" />
        <p>{temp2}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind2}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>5:00</p>
        <img src={weatherImg5} alt="" />
        <p>{temp5}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind5}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>8:00</p>
        <img src={weatherImg8} alt="" />
        <p>{temp8}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind8}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>11:00</p>
        <img src={weatherImg11} alt="" />
        <p>{temp11}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind11}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>14:00</p>
        <img src={weatherImg14} alt="" />
        <p>{temp14}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind14}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>17:00</p>
        <img src={weatherImg17} alt="" />
        <p>{temp17}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind17}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>20:00</p>
        <img src={weatherImg20} alt="" />
        <p>{temp20}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind20}</p>
    </div>
    <div className={styles.column}>
    <p className={isVisible ? 'visible' : 'invisible'}>23:00</p>
        <img src={weatherImg23} alt="" />
        <p>{temp23}</p>
        <p className={isVisible ? 'visible' : 'invisible'}>Ветер:</p>
        <p>{wind23}</p>
    </div>
</div>
</div>
)
}

export default WeatherUI