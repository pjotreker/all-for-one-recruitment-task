import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddReport from './AddReport';
import EditReport from './EditReport';
import ReportsList from './ReportsList';
import useLocalStorage from '../hooks/useLocalStorage';

const Router = () => {
  const [reports, setReports] = useLocalStorage('reports', []);

  return (
    <div className="main-content">
        <Routes>
            <Route element={<ReportsList reports={reports} />} path="/list" />
            <Route element={<AddReport reports={reports} setReports={setReports}/>} path="/add" />
            <Route element={<EditReport reports={reports} setReports={setReports} />} path="/edit/:id" />
            <Route component={<Navigate to="/" />} />
        </Routes>
    </div>
  );
};

export default Router;