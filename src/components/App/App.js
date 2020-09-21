import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import 'fontsource-roboto';


class App extends Component {

  state = {
    galleryItems: []
  }

  componentDidMount() {
    console.log('app is ready');
    this.getImages();
  }

  getImages() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('GET', response);
      this.setState({
        galleryItems: response.data
      });
    }).catch(err => {
      console.error('error!', err);
    });
  }

  updateLikes = (imageId) => {
    axios.put(`/gallery/like/${imageId}`)
      .then(response => {
        console.log("this is the response from server", response);
        this.getImages();
      }).catch(err => {
        console.error('delete song failed', err)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList updateLikes={this.updateLikes} galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
