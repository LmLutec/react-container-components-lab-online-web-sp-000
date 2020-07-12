import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component{

    state = {
        reviews: []
    }

    componentDidMount(){
        this.getReviews()
    }

    render(){
        return(
            <div className="latest-movie-reviews">
               {this.displayReviews()}
            </div>
        )
    }

    getReviews = () => {
        fetch(`${URL}`)
            .then(res => res.json())
            .then(json => this.setState({ reviews: json.results}))
            
    }

    displayReviews = () => {
        
        // console.log(this.state.reviews)
        // this.state.reviews.map((review) => <li key={review.id}>{review}</li>)
    }
}