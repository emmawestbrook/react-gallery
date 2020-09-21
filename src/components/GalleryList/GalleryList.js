import { GridList } from '@material-ui/core';
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { Paper } from '@material-ui/core';



class GalleryList extends Component {



    render() {
        return (
            <Paper className="gallery">
                {this.props.galleryItems.map(item =>
                    <GalleryItem updateLikes={this.props.updateLikes} item={item} />
                )}
            </Paper>
        )
    }
}

export default GalleryList;