import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               Movie Review Search:<input type="text" name="search" value={this.state.searchTerm} onChange={this.handleInput} />
               <input type="Submit" />
            </form>
        )
    }

    grabOneReview = () => {
        let search = this.state.searchTerm

        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}`)
            .then(res => res.json())
            .then(json => console.log(json))
    }

    handleInput = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = () => {
        event.preventDefault()
        // console.log(this.state.searchTerm)
    }
}