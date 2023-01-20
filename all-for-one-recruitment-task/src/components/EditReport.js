import React from 'react';
import ReportForm from './ReportForm';
import { useParams } from 'react-router-dom';

const EditReport = ({ history, reports, setReports }) => {
  const { id } = useParams();
  const reportToEdit = reports.find((report) => report.id === id);

  const handleOnSubmit = (report) => {
    const filteredReports = reports.filter((report) => report.id !== id);
    setReports([report, ...filteredReports]);
    history.push('/');
  };

  return (
    <div>
      <ReportForm report={reportToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditReport;