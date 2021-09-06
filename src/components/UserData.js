import React, { Component } from 'react'

class UserData extends Component {
    constructor(props) {
        super(props)
        this.state = {
           LikeNumber : 0,
        }
        
    }
    likeImage = () => {
        this.setState({
            LikeNumber: this.state.LikeNumber + 1
            // console.log('hii');
        })
    }

    render() {

        return (
            <>
          
                <img onClick={this.likeImage
                } class="img" src={this.props.ImgUrl} alt={this.props.title} />
                <h4>Number Of Like The Image: {this.state.LikeNumber}</h4>
                <h4>title: {this.props.title}</h4>
                <h4>desription :{this.props.desription}</h4>
                <h4>keyword :{this.props.keyword}</h4>
                <h4>horns :{this.props.horns}</h4>


            </>
        )
    }
}

export default UserData
