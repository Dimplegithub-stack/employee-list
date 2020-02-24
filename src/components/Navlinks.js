
import React from 'react';
import {  Link } from 'react-router-dom'

function Navlinks() {

  return (
   <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm abc" >
                <h5 className="my-0 mr-md-auto font-weight-normal">Learnings</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/">Home</Link>
                    <Link to="/employee">Employee</Link>
                    <Link to="/flipkartdata">Flipkartdata</Link>
                    <Link to="/totallistdata">Totallistdata</Link>
                     <Link to="/Content">StateAsImmutable</Link>
                      <Link to="/">Logout</Link>
                </nav>

            </div>
  );
}

export default Navlinks

               