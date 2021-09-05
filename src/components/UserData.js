import React, { Component } from 'react'
let imgArr =["http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
              "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
              "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
];
let header4 = [];

class UserData extends Component {
    render() {
        for (let i = 0; i < imgArr.length ; i++) {
            header4.innerHTML =`<img src = ${imgArr[i]} />`;
        }
        return (
            <>
          
                <h4>ImgUrl: {this.props.ImgUrl}</h4>
                <h4>header4:{this.props.header4}</h4>
                <h4>title: {this.props.title}</h4>
                <h4>desription :{this.props.desription}</h4>
                <h4>keyword :{this.props.keyword}</h4>
                <h4>horns :{this.props.horns}</h4>


            </>
        )
    }
}

export default UserData
