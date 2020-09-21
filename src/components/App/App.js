import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import 'fontsource-roboto';


class App extends Component {
  //setting the array of objects as the state
  state = {
    galleryItems: []
  }

  componentDidMount() {
    console.log('app is ready');
    //show images on page load
    this.getImages();
  }

  //making the image request to the server to load all images from the database
  getImages() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('GET', response);
      //setting the image array as galleryItems in state
      this.setState({
        galleryItems: response.data
      });
    }).catch(err => {
      console.error('error!', err);
    });
  }

  //use image id to update like count in the database
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
          <h1 className="App-title">Random Images from My Computer Desktop</h1>
        </header>
        <br />
        {/* container item for all the gallery components which passes the update likes function
        and the entire array of objects to be iterated through */}
        <GalleryList updateLikes={this.updateLikes} galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
