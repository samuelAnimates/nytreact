import React from "react";
import Article from "../Article"
import DeleteButton from "../DeleteButton"

const Saved = (props) =>
  
  <div className="panel panel-default">
      <div className="panel-heading">
      <h2>
        Saved Articles
      </h2>
      </div>
      {props.savedArray.map(result =>
        <div className="panel panel-default" data-id={result._id}>
            <div className="panel-body">
              <Article 
                title = {result.title}
                link = {result.link}
                snippet = {result.snippet}
                date = {result.date}
              />
              <DeleteButton />
            </div>
        </div>
      )}
    <div className="panel-footer text-center">
      End of Saved Articles
    </div>
  </div>

export default Saved;