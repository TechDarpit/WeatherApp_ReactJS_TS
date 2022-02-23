import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import styles from './WeatherForm.module.css';

const WeatherForm: React.FC<{
  onAddWeather: (arg0: {
    enteredCity: string;
    setedDateTime: string;
    enterdTemp: number;
    selectedTempType: string;
    selectedWeatherType: string;
  }) => void;
}> = (props) => {
  const [validated, setValidated] = useState(false);

  const cityInputRef = useRef<HTMLInputElement>(null);
  const datetimeInputRef = useRef<HTMLInputElement>(null);
  const tempInputRef = useRef<HTMLInputElement>(null);
  const tempTypeInputRef = useRef<HTMLSelectElement>(null);
  const weatherTypeInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      const enteredCity = cityInputRef.current!.value;
      const setedDateTime = datetimeInputRef.current!.value;
      const enterdTemp = +tempInputRef.current!.value;
      const selectedTempType = tempTypeInputRef.current!.value;
      const selectedWeatherType = weatherTypeInputRef.current!.value;

      const enteredData = {
        enteredCity,
        setedDateTime,
        enterdTemp,
        selectedTempType,
        selectedWeatherType,
      };

      // console.log(enteredData);
      props.onAddWeather(enteredData);
    }
  };

  return (
    <div className={styles.container}>
      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City Name'
            ref={cityInputRef}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid city
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='datetime'>
          <Form.Label>Date And Time</Form.Label>
          <Form.Control type='datetime-local' ref={datetimeInputRef} required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid date and time
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='temp'>
          <Form.Label>Temperature</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Temperature'
            step='0.01'
            ref={tempInputRef}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid temprature
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='tempType'>
          <Form.Label>Temperature Type</Form.Label>
          <Form.Select ref={tempTypeInputRef} required>
            <option value='' disabled selected hidden>
              Select Temperature Type
            </option>
            <option value='C'>Celsius</option>
            <option value='F'>Fahrenheit</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please select a valid temprature type
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='weatherType'>
          <Form.Label>Weather Type</Form.Label>
          <Form.Select ref={weatherTypeInputRef} required>
            <option value='' disabled selected hidden>
              Select Weather Type
            </option>
            <option value='Sunny'>Sunny</option>
            <option value='Cloudy'>Cloudy</option>
            <option value='Snowy'>Snowy</option>
            <option value='Rainy'>Rainy</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please select a valid weather type
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant='primary' type='submit' className={styles.btn}>
          Add Weather
        </Button>
      </Form>
    </div>
  );
};

export default WeatherForm;
