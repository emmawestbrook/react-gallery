import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div>
                {this.props.galleryItems.map(item =>
                    <GalleryItem item={item} />
                )}
            </div>
        )
    }
}

export default GalleryList;