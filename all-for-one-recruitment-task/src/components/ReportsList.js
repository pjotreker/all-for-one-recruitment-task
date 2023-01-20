import React from 'react';
import Report from './Report';

const ReportsList = ({ reports }) => {
  const _ = require('lodash'); 

  return (
    <div>
      <h2>List of reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Unit</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {!_.isEmpty(reports) ? (
              reports.map((report) => (
                <Report key={report.id} {...report} />
              ))
            ) : (
              <p className="message">No reports available. Please add some reports.</p>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsList;