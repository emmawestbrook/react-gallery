import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {



    render() {
        return (
            <div className="gallery">
                {this.props.galleryItems.map(item =>
                    <GalleryItem updateLikes={this.props.updateLikes} item={item} />
                )}
            </div>
        )
    }
}

export default GalleryList;