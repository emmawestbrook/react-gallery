import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        isClicked: true
    }

    clickText = () => {
        console.log("showing text");
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        return (
            <div className="galleryItem" key={this.props.item.id}>
                <div onClick={this.clickText}>
                    {
                        this.state.isClicked ?
                            <img src={`${this.props.item.path}`} width="216" /> :
                            <div className="imageText"><h2>{`${this.props.item.description}`}</h2></div>
                    }
                </div>

                <p>{
                    this.props.item.likes > 0 ?
                        `${this.props.item.likes} people like this image` :
                        'nobody likes this image :•('
                }</p>
                <button onClick={() => this.props.updateLikes(this.props.item.id)}>like</button>
            </div>
        )
    }
}

export default GalleryItem;