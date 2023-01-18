import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddReport from './AddReport';
import ReportsList from './ReportsList';

const Router = () => {
  return (
      <div>
        <div className="main-content">
          <Routes>
            <Route element={<ReportsList />} path="/list" exact={true} />
            <Route element={<AddReport />} path="/add" />
          </Routes>
        </div>
      </div>
  );
};

export default Router;