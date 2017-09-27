import React, { Component }  from "react";
import Search from "../Search/search.jsx";
import Results from "../Results/results.jsx";

class Main extends Component{

    constructor() {
        super();
        this.state = {
            result: {},
            search: ""
        }
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
        this.searchArticles(this.state.search);
    };

    searchArticles = (query) => {
        API.search(query)
        .then(res =>{
            this.setState({ result: res.data })
        }) 
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1 class="text-center">NYT React</h1>
                    <p class="text-center">This is a single-page React app that utilizes the New York Times API to search for articles, store them in a Mongo database, and display them to the user.</p>
                </div>
                <Search />
                <Results />
            </div>
        );
    }
}
    

export default Main;