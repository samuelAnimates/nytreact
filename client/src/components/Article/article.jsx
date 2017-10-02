import React from "react";


const Article = (props) =>
  
  <div className="panel panel-primary">
    <div className="panel-heading">
        <h2>{props.title}</h2>
    </div>
    <div className="panel-body">
        <div className="row">
            Date: <span>{props.date}</span>
        </div>
        <div className="row">
            URL: <a href={props.link}>{props.url}</a>
        </div>
        <div className="row">
            <p>Snippet: {props.snippet}</p>
        </div>
    </div>
  </div>

export default Article;