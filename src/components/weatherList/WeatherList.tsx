import { Fragment } from 'react';
import WeatherItem from './WeatherItem';
import Weather from '../../models/weather';

import styles from './WeatherList.module.css';

const WeatherList: React.FC<{
  dummyData: Weather[];
  onRemoveWeather: (id: string) => void;
}> = (props) => {
  const weathers = props.dummyData;

  return (
    <Fragment>
      <ul className={styles.list}>
        {weathers.map((weather) => (
          <WeatherItem
            key={weather.id}
            city={weather.city}
            temp={weather.temp}
            tempType={weather.tempType}
            weatherType={weather.weatherType}
            date={weather.date}
            onRemoveWeather={props.onRemoveWeather.bind(null, weather.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default WeatherList;
