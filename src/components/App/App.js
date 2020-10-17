import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import 'fontsource-roboto';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



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
      <Router>
        <header className="App-header">
          <h1 className="App-title">Random Images from My Computer Desktop</h1>
          <Link className="nav-link" to="/">Gallery</Link>
          <Link className="nav-link" to="/about">About</Link>
        </header>
        {/* <nav>
          <main>
            <ul>
              <li><Link to="/">Gallery</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </main>
        </nav> */}




        <main>
          <Route path="/" exact>
            <div className="App">
              <br />
              {/* container item for all the gallery components which passes the update likes function
             and the entire array of objects to be iterated through */}
              <GalleryList updateLikes={this.updateLikes} galleryItems={this.state.galleryItems} />
            </div>
          </Route>
          <Route path="/about">
            <div className="about">
              <h1>about</h1>
              <p>here is a collection of images that are on my computer desktop</p>
            </div>
          </Route>

        </main>



      </Router>
    );
  }
}

export default App;
