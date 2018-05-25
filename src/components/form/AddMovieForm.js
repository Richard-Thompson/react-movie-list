import React, { Component } from 'react';
import './addMovieForm.css';
import firebase from './../../firebase.js'

class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description:'',
      image:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className='movie-form'>
          <input 
            name='title' 
            value={this.state.title} 
            onChange={this.handleChange}
            placeholder='title..'
            />
          <input 
            name='description' 
            value={this.state.description} 
            onChange={this.handleChange}
            placeholder='description..'
            />
          <input 
            name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            placeholder='image..'
            />
          <button type='submit'>Add Movie</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit (event) {
    event.preventDefault();
    
    const movies = firebase.database().ref('movies');

    const movie = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    }

    movies.push(movie);

    this.setState({
      title:'',
      description:'',
      image:''
    })
  }
}

export default AddMovieForm;