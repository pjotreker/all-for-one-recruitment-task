import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/sass/ReportsList.scss';

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
        <td className="report-tbody-td">{new Date(date).toDateString()}</td>
        <td className="report-tbody-td">{temperature + " K"}</td>
        <td className="report-tbody-td">{unit}</td>
        <td className="report-tbody-td">{city}</td>
        <td className="report-tbody-td">
            <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
                EDIT
            </Button>{' '}
        </td>
    </tr>
  );
};

export default Report;