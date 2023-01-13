import React, { useEffect } from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { axiosInstance, STUDENTS } from '../api';

function Students() {

  const [studentsList, setCoursesList] = React.useState([]);
  const columns = [
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'mobileNumber',
      headerName: 'Mobile Number',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 250
    }

  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  useEffect(() => {

    axiosInstance.get(STUDENTS, {})
      .then((response) => {
        setCoursesList(response.data);

      })
      .catch((error) => {

      });



  }, [])


  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Students</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link to="/addstudent">
              <button className="w-100 btn btn-primary" type="button">Add Student</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card mb-3 col-md-8">        
        <DataTable value={studentsList} responsiveLayout="scroll">
          <Column field="firstName" header="FirstName"></Column>
          <Column field="lastName" header="Last Name"></Column>
          <Column field="mobileNumber" header="Mobile Number"></Column>
          <Column field="email" header="Email"></Column>
        </DataTable>
      </div>
    </div>

  );
}

export default Students