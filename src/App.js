import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import Home from './components/Home';
import Header from './components/Header';
import Students from './components/Students';
import Courses from './components/Courses';
import Batches from './components/Batches';
import AddStudent from './components/student/AddStudent';
import AddBatch from './components/batches/AddBatch';
import SideNavBar from './components/sidenavbar';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid"> 
      <div className="row">        
        <header>
          <Header></Header>
        </header>

        <div className="App mb-3 col-sm-2 bg-light">
          <SideNavBar></SideNavBar>
        </div>

        <div className='col-sm-10 mt-5'>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/students' element={< Students />}></Route>
            <Route exact path='/addstudent' element={< AddStudent />}></Route>
            <Route exact path='/courses' element={< Courses />}></Route>
            <Route exact path='/batches' element={< Batches />}></Route>
            <Route exact path='/addbatch' element={< AddBatch />}></Route>
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
