import React from 'react';
// import ReportForm from './ReportForm';

const AddReport = () => {
  const handleOnSubmit = (report) => {
    console.log(report);
  };

  return (
    <div>
        {"Hello world!!!"}
    </div>
    // <React.Fragment>
    //   <ReportForm handleOnSubmit={handleOnSubmit} />
    // </React.Fragment>
  );
};

export default AddReport;