import React from 'react';

const AddCourses = () => {

    return (
        <div className="container">
            <div className="col-lg-6">
                <h4 className="mb-3">Add Courses</h4>

                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Course name</label>
                            <input type="text" className="form-control" id="coursename" placeholder="Enter Course Name" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                    
                        <div className="col-sm-12">
                            <label for="description" class="form-label">Description</label>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="5"></textarea>
                            </div>
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

export default AddCourses;