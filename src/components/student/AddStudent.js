import React from 'react';
import { useState } from "react";
import { useHistory, useNavigate } from 'react-router-dom';
import { axiosInstance, STUDENTS } from "../../api";
import Alert from '@mui/material/Alert';
import ConfirmationDialog from "../dialogs/ConfirmationDialog";
//import { Student } from "../../models";




const AddStudent = () => {

    //const history = useHistory();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [referenceFirstName, setReferenceFirstName] = useState('')
    const [referenceLastName, setReferenceLastName] = useState('')
    const [referenceMobileNUmber, setReferenceMobileNUmber] = useState('')
    const [errorTitle, setErrorTitle] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [dialogMsg, setDialogMsg] = useState('')
    const [error, setError] = useState(false)
    const [showDialog, setShowDialog] = useState(false)


    const saveStudent = () => {
        
        const student = {
            'firstName': firstName,
            'lastName': lastName,
            'mobileNumber': mobileNumber,
            'email': email,
            'referenceFirstName': referenceFirstName,
            'referenceLastName': referenceLastName,
            'referenceMobileNUmber': referenceMobileNUmber
        }
        
        axiosInstance.post(STUDENTS, student)
            .then((response) => {
                //setCoursesList(response.data);
                if(response.data === 'Duplicate found'){
                    setError(true);

                    setErrorTitle("Failed");
                    setErrorMessage(response?.data);
                    
                }else{
                    setErrorTitle("Success");
                    setDialogMsg("Student Added Successfully")
                    setShowDialog(true)
                }
                
            })
            .catch((error) => {
                setError(true);
                setErrorMessage(error?.message)
                
            });
    }

    const handleDialogClose = (showDialog) =>{
        setShowDialog(showDialog)
        navigate('/students')
    }

    return (

        <div className="container">

            <main>
                <div className="row g-5">
                    { error &&
                        <Alert severity="error" onClose={() => { setError(false)}}>{errorMessage}</Alert>
                    }
                    <div className="col-md-7 col-lg-4">
                        <h4 className="mb-3">Add Student</h4>

                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Mobile Number</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">+91</span>
                                        <input type="text" className="form-control" id="username" placeholder="Enter Mobile Number" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} maxLength="10" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />

                                <h4 className="mb-3">Reference Details</h4>

                                <div className="col-12">
                                    <label htmlFor="firstName" className="form-label">Refererral First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value={referenceFirstName} onChange={(event) => setReferenceFirstName(event.target.value)} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="lastName" className="form-label">Referral Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value={referenceLastName} onChange={(event) => setReferenceLastName(event.target.value)} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="referralMobile" className="form-label">Referral Mobile Number</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">+91</span>
                                        <input type="text" className="form-control" id="referralMobile" placeholder="Mobile Number" value={referenceMobileNUmber} onChange={(event) => setReferenceMobileNUmber(event.target.value)} maxLength="10" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 my-5">
                                    <button className="w-100 btn btn-primary" type="button" onClick={saveStudent}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            { showDialog &&
            <ConfirmationDialog onDialogClose={handleDialogClose}  showDialog={showDialog} title={errorTitle} msg={dialogMsg}></ConfirmationDialog>
            }       
        </div>
    )
}

export default AddStudent;