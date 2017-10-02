import React from "react";
import Article from "../Article/article.jsx"
import SaveButton from "../SaveButton/saveButton.jsx"
import DeleteButton from "../DeleteButton/deleteButton.jsx"

const Results = (props) =>
  
  <div className="panel panel-default">
      <div className="panel-heading">
      <h2>
        Search Results
      </h2>
      </div>
      {props.resultsArray.map(result =>
        <div className="panel panel-default">
            <div className="panel-body">
              <Article 
                title = {result[1].headline.main}
                url = {result[1].web_url}
                blurb = {result[1].snippet}
                date = {result[1].pub_date}
              />
              <SaveButton />
            </div>
        </div>
      )}
    <div className="panel-footer text-center">
      End of Results
    </div>
  </div>

export default Results;