import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3">
                
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link" aria-current="page">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/students" className="nav-link link-dark">
                            Students
                        </a>
                    </li>
                    <li>
                        <a href="/batches" className="nav-link link-dark">
                            Batches
                        </a>
                    </li>
                    <li>
                        <a href="/courses" className="nav-link link-dark">
                            Courses
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideNavBar;