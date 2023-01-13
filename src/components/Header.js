import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="px-3 py-2 text-bg-dark">           
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center ms-3 my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <h2>EduCourse</h2>
                    </a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        
                        <li>
                            <a href="#" className="nav-link text-white">                                
                                Sign Out
                            </a>
                        </li>

                    </ul>
                </div>            
        </div>
       
    );
}

export default Header;
