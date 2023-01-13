import React from 'react';

const AddBatch = () => {

    return (
        <div className="container">
            <div className="col-lg-6">
                <h4 className="mb-3">Add Batch</h4>

                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Course name</label>
                            <input type="text" className="form-control" id="coursename" placeholder="Enter Course Name" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="country" class="form-label">Course Type</label>
                            <select class="form-select" id="coursetype" required>
                                <option value="">Choose...</option>
                                <option>Angular</option>
                                <option>ReactJS</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <label for="description" class="form-label">Description</label>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="5"></textarea>

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="startdate" className="form-label">Start Date</label>
                            <input type="text" className="form-control" id="startdate" placeholder="dd/mm/yyyy" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="enddate" className="form-label">End Date</label>
                            <input type="text" className="form-control" id="enddate" placeholder="dd/mm/yyyy" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="starttime" className="form-label">Start Time</label>
                            <input type="text" className="form-control" id="starttime" placeholder="hh:mm am/pm" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="endtime" className="form-label">End Time</label>
                            <input type="text" className="form-control" id="endtime" placeholder="hh:mm am/pm" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="batchtype" class="form-label">Batch Type</label>
                            <select class="form-select" id="batchtype" required>
                                <option value="">Choose...</option>
                                <option>Weekday Mon-Fri</option>
                                <option>Weekend Sat-Sun</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-sm-6">
                           
                        </div>
                        <div class="col-sm-6">
                            <button class="w-100 btn btn-secondary" type="button">Clear</button>
                        </div>
                        <div class="col-sm-6">
                            <button class="w-100 btn btn-primary" type="button">Saved</button>
                        </div>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddBatch;