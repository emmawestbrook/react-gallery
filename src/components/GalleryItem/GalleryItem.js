import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <img src={`${this.props.item.path}`} width="200" />
                <p> {`${this.props.item.description}`} </p>
                <p>{
                    this.props.item.likes > 0 ?
                        `${this.props.item.likes} people like this image` :
                        'nobody likes this image :•('

                }</p>
            </div>
        )
    }
}

export default GalleryItem;