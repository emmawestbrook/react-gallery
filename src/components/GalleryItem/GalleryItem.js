import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';


class GalleryItem extends Component {
    // state has boolean that determines whether text is shown or not
    state = {
        isClicked: true
    }
    //when image is clicked, state is updated to its current opposite
    clickText = () => {
        console.log("showing text");
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    render() {
        return (
            // passing id to be key of each item
            <Card className="galleryItem" key={this.props.item.id}>
                <div onClick={this.clickText}>
                    {/* ternary operator determines whether image or text is displayed depending on state */}
                    {
                        this.state.isClicked ?
                            <img src={`${this.props.item.path}`} width="216" /> :
                            <div className="imageText"><h2>{`${this.props.item.description}`}</h2></div>
                    }
                </div>

                <p>{
                    // ternary operator determines what is displayed depending on like number
                    this.props.item.likes > 0 ?
                        `${this.props.item.likes} people like this image` :
                        'nobody likes this image :•('
                }</p>
                {/* on click of like button, database request is made to update like number in app.js */}
                <Button onClick={() => this.props.updateLikes(this.props.item.id)}>like</Button>
            </Card>
        )
    }
}

export default GalleryItem;