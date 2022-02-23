import { v4 as uuid } from 'uuid';

class Weather {
  id: string;
  city: string;
  date: Date;
  temp: number;
  tempType: string;
  weatherType: string;

  constructor(
    city: string,
    date: string,
    temp: number,
    tempType: string,
    weatherType: string
  ) {
    this.id = uuid().slice(0, 8);
    this.city = city;
    this.date = new Date(date);
    this.temp = temp;
    this.tempType = tempType;
    this.weatherType = weatherType;
  }
}

export default Weather;
