import React, { Component } from 'react';

class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
           LikeNumber : 0
        }
        
    }
    likeImage = () => {
        this.setState({
            LikeNumber: this.state.LikeNumber + 1
            // console.log('hii');
        })
    };

    render() {

        return (
            <>
            <section class="review" id="review">
            <div class="box-container">
            <div class="box">
                <img onClick={this.likeImage} class="img" src={this.props.ImgUrl} alt={this.props.title} />
                <h3><span>Number Of Like This Image:</span> {this.state.LikeNumber}</h3>
                <h3><span>title:</span> {this.props.title}</h3>
                <h3><span>desription :</span>{this.props.desription}</h3>
                <h3><span>keyword :</span>{this.props.keyword}</h3>
                <h3><span>horns :</span>{this.props.horns}</h3>
            </div>
        </div>
    </section>
            </>
        )
    }
}

export default UserData;
