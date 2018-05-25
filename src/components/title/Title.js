import React, { Component } from 'react';
import './title.css';
import MovieList from '../movie-list/MovieList';
import AddMovieForm from '../form/AddMovieForm';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  render() {
    return (
      <div onClick={this.onClickHandler} className={`header ${this.state.expand ? 'big' : ''}`}>
        <h1>Movies</h1>
        <MovieList />
        <AddMovieForm />
      </div>
    );
  }

  onClickHandler () {
    this.setState({
      expand: true
    })
  }
}

export default Title;