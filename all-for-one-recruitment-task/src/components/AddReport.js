import React from 'react';
import ReportForm from './ReportForm';

const AddReport = ({ reports, setReports, history }) => {
    const handleOnSubmit = (report) => {
      console.log('report: ', report);
      setReports([report, ...reports]);
      history.push('/list');
    };

  return (
    <React.Fragment>
      <ReportForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddReport;