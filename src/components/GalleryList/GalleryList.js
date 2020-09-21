import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { Paper } from '@material-ui/core';



class GalleryList extends Component {

    render() {
        return (
            // used the paper ui element from material ui for a little style
            <Paper className="gallery">
                {/* map function renders all objects and passes them 
                the item as an object as well as
                the updateLikes function that is kept in app.js */}
                {this.props.galleryItems.map(item =>
                    <GalleryItem updateLikes={this.props.updateLikes} item={item} />
                )}
            </Paper>
        )
    }
}

export default GalleryList;