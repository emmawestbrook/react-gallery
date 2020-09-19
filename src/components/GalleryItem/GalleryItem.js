import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <img src={`${this.props.item.path}`} width="200" />
            </div>
        )
    }
}

export default GalleryItem;