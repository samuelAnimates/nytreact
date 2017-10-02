import React from "react";


const Search = props =>
  
  <div className="panel">
    <div className="row">
      <h2>Search</h2>
    </div>
    <div className="row">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for Articles"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>

export default Search;

