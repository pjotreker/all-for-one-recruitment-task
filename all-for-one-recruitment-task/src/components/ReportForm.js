import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../styles/sass/ReportForm.scss';

const ReportForm = (props) => {

  const [report, setReport] = useState(() => {
    return {
      temperature: props.report ? props.report.temperature : '',
      unit: props.report ? props.report.unit : '',
      city: props.report ? props.report.city : '',
      date: props.report ? props.report.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { temperature, unit, city, date } = report;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [temperature, unit, city, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '';
    });

    if (allFieldsFilled) {
      const report = {
        id: uuidv4(),
        temperature,
        unit,
        city,
        date,
      };
      props.handleOnSubmit(report);
      // console.log("New report:", report);
    } else {
      errorMsg = 'Please fill out all the fields!';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'temperature':
        if (typeof(value) === "string") {
          setReport((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'unit':
        console.log("Unit:", value);
        if (value === "C" || value === "F" || value === "K") {
          setReport((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'city':
        if (typeof(value) === "string") {
          setReport((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'date':
        let today = new Date();
        if (typeof(value) === "string" && (value <= today.toISOString().split('T')[0])) {
          setReport((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setReport((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-report-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="report-form-group" controlId="temperature">
          <Form.Label className="horizontal-element-of-form">Temperature</Form.Label>
          <Form.Control
            className="input-control horizontal-element-of-form"
            type="number"
            name="temperature"
            value={temperature}
            placeholder="Enter the temperature"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br/>
        <Form.Group className="report-form-group" controlId="unit">
          <Form.Label className="horizontal-element-of-form">Unit</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="form-group-radio">
            <Form.Check
                className="radio-input-control horizontal-element-of-form"
                type={type}
                name="unit"
                value={"C"}
                onChange={handleInputChange}
                inline
                label="C"
            />
            <Form.Check
                className="radio-input-control horizontal-element-of-form"
                type={type}
                name="unit"
                value={"K"}
                onChange={handleInputChange}
                inline
                label="K"
            />
            <Form.Check
                className="radio-input-control horizontal-element-of-form"
                type={type}
                name="unit"
                value={"F"}
                onChange={handleInputChange}
                inline
                label="F"
            />
            </div>
          ))}
        </Form.Group>
        <br/>
        <Form.Group className="report-form-group" controlId="city">
          <Form.Label className="horizontal-element-of-form">City</Form.Label>
          <Form.Control
            className="input-control horizontal-element-of-form"
            type="text"
            name="city"
            value={city}
            placeholder="Enter name of city"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br/>
        <Form.Group className="report-form-group" controlId="date">
          <Form.Label className="horizontal-element-of-form">Date</Form.Label>
          <Form.Control
            className="input-control horizontal-element-of-form"
            type="date"
            name="date"
            value={date}
            placeholder="Enter report's date"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReportForm;