import React from 'react';
import '../css/property.css';

const Property = () => {
  return (
    <div className="container">
      <header>
        <img src="Logo.jpeg" alt="Logo" className="logo" />
        <h1>Property</h1>

      </header>
      <input type="text" className="search-bar" placeholder="Search" />

      <div className="form-container">
        <div className="form-section">
          <label>Property Identification Number</label>
          <input type="text" />

          <label>Property Name</label>
          <input type="text" />

          <label>Owner of the property</label>
          <input type="text" />

          <label>Address</label>
          <textarea rows="4"></textarea>

          <label>Property for</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
          </div>
        </div>

        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>property_ID</th>
                <th>property_Name</th>
                <th>Property_Owner</th>
                <th>Address</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="button-group">
        <button>Clear</button>
        <button>Update</button>
        <button>ADD</button>
        <button>Exit</button>
      </div>
    </div>
  );
};

export default Property;
