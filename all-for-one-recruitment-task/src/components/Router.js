import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddReport from './AddReport';
import ReportsList from './ReportsList';
import useLocalStorage from '../hooks/useLocalStorage';

const Router = () => {
  const [reports, setReports] = useLocalStorage('reports', []);

  return (
    <div className="main-content">
        <Routes>
            <Route element={<ReportsList />} path="/list" />
            <Route element={<AddReport reports={reports} setReports={setReports}/>} path="/add" />
        </Routes>
    </div>
  );
};

export default Router;