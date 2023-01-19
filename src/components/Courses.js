import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Courses() {
    return (
        <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">courses</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <Link to="/addcourses">
                <button className="w-100 btn btn-primary" type="button" rou>Add Course</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Courses