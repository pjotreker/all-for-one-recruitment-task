import React from 'react';
import Report from './Report';
import '../styles/sass/ReportsList.scss';

const ReportsList = ({ reports }) => {
  const _ = require('lodash'); 

  return (
    <div>
      <h2>List of reports</h2>
      <table id="reports-list-table">
        <thead>
          <tr id="reports-list-thead-tr">
            <th>Date</th>
            <th>Temperature</th>
            <th>Unit</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="reports-list-tbody">
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