import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ReportForm = (props) => {

  const [report, setReport] = useState({
    temperature: props.report ? props.report.temperature : '',
    unit: props.report ? props.report.unit : '',
    city: props.report ? props.report.city : '',
    date: props.report ? props.report.date : ''
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
        <Form.Group controlId="temperature">
          <Form.Label>Temperature</Form.Label>
          <br/>
          <Form.Control
            className="input-control"
            type="number"
            name="temperature"
            value={temperature}
            placeholder="Enter the temperature"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="unit">
          <Form.Label>Unit</Form.Label>
          <br/>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="C"
                type={type}
                id={`inline-${type}-1`}
                className="input-control"
                name="unit"
                value={"C"}
                onChange={handleInputChange}
            />
            <Form.Check
                inline
                label="K"
                type={type}
                id={`inline-${type}-1`}
                className="input-control"
                name="unit"
                value={"K"}
                onChange={handleInputChange}
            />
            <Form.Check
                inline
                label="F"
                type={type}
                id={`inline-${type}-1`}
                className="input-control"
                name="unit"
                value={"F"}
                onChange={handleInputChange}
            />
            </div>
          ))}
        </Form.Group>
        <br/>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <br/>
          <Form.Control
            className="input-control"
            type="text"
            name="city"
            value={city}
            placeholder="Enter name of city"
            onChange={handleInputChange}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <br/>
          <Form.Control
            className="input-control"
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