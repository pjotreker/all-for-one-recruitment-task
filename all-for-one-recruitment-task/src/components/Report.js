import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Report = ({
  id,
  temperature,
  unit,
  city,
  date
}) => {
  
  const navigate = useNavigate();

  if (unit == "C") {
    temperature = Math.round((+temperature + 273.15) * 10) / 10;
  } else if (unit == "F") {
    temperature = Math.round((((+temperature - 32) * (5/9)) + 273.15) * 10) / 10;
  }
    
  return (
    <tr>
        <td>{new Date(date).toDateString()}</td>
        <td>{temperature + " K"}</td>
        <td>{unit}</td>
        <td>{city}</td>
        <td>
            <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
                Edit
            </Button>{' '}
        </td>
    </tr>
  );
};

export default Report;