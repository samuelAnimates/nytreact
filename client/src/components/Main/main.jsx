import React, { Component }  from "react";
import Search from "../Search/search.jsx";
import Results from "../Results/results.jsx";
import API from "../../utils/API.js";

class Main extends Component{

    constructor() {
        super();
        this.state = {
            result: [],
            search: ""
        }
    }

    componentDidMount() {
        this.searchArticles("Smoking");
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchArticles(this.state.result.array);
    };

    searchArticles = (query) => {
        API.search(query)
        .then(res =>{
            console.log(res);
            this.setState({ result: Object.keys(res.data.response.docs).map(function(key){
                return [Number(key), res.data.response.docs[key]]; 
                })
            });
            console.log(this.state.result);
        }) 
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">NYT React</h1>
                    <p className="text-center">This is a single-page React app that utilizes the New York Times API to search for articles, store them in a Mongo database, and display them to the user.</p>
                </div>
                <div className='container'>
                    <Search 
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Results 
                        resultsArray = {this.state.result}
                    />
                </div>
            </div>
        );
    }
}
    

export default Main;