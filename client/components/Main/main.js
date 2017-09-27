import React from "react";
import Search from "../Search/search.js";

const Main = props =>
    <div class="container">
        <div class="jumbotron">
            <h1 class="text-center">NYT React</h1>
            <p class="text-center">This is a single-page React app that utilizes the New York Times API to search for articles, store them in a Mongo database, and display them to the user.</p>
        </div>
        <Search />
    </div>

export default Main;