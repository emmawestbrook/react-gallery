import Axios from 'axios';
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    // updateLikes = (imageId) => {
    //     Axios.put(`/gallery/like/${imageId}`).then(
    //         response{
    //         console.log('likes updated');
    //     }
    //     )
    // }

    render() {
        return (
            <div className="gallery">
                {this.props.galleryItems.map(item =>
                    <GalleryItem item={item} />
                )}
            </div>
        )
    }
}

export default GalleryList;