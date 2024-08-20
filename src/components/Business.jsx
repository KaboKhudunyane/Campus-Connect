import React from 'react';
import '../css/business.css'; 

function Business() {
  return (
    <div className="container">
      <header className="header">
        <img src="Logo.jpeg" alt="Logo" className="logo" />
        <h1>Business information</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="form-and-table">
        <div className="form-container">
          <input type="text" placeholder="Business Name" />
          <input type="text" placeholder="Business Identification Number" />
          <input type="text" placeholder="Business contact number" />
          <textarea placeholder="Business Description"></textarea>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>BusinessName</th>
                <th>BusinessID</th>
                <th>BusinessNO</th>
                <th>BusinessDescrip</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="buttons">
        <button>Clear</button>
        <button>Update</button>
        <button>Add</button>
        <button>Exit</button>
      </div>
    </div>
  );
}

export default Business;