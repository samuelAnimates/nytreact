import React from "react";
import Article from "../Article"
import SaveButton from "../SaveButton"
import DeleteButton from "../DeleteButton"

const Results = (props) =>
  
  <div className="panel panel-default">
      <div className="panel-heading">
      <h2>
        Search Results
      </h2>
      </div>
      {props.resultsArray.map(result =>
        <div className="panel panel-default" data-title={result[1].headline.main} data-link={result[1].web_url} data-snippet={result[1].snippet} data-date={result[1].pub_date.substr(0, [10])}>
            <div className="panel-body">
              <Article 
                title = {result[1].headline.main}
                link = {result[1].web_url}
                snippet = {result[1].snippet}
                date = {result[1].pub_date.substr(0, [10])}
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