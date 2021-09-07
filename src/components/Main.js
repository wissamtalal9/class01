import React, { Component } from 'react';
import UserData from './UserData';
import images from './images.json';

// props is an object inherited from the react Component class
// it is used to pass data/ hold a set of data and pass it from one component to another
/* 
props={

}
class Component{
    constructor(props){
        this.props={}
    }
}
*/
class Main extends Component {

    render() {
        // let users=[{ ImgUrl:"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",title:"UniWhal",desription:"A unicorn and a narwhal nuzzling their horns",keyword:"narwhal",horns:1},
        //             {ImgUrl:"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80", title:"Rhino Family", desription:"Mother (or father) rhino with two babies", keyword:"rhino", horns:2},
        //             {ImgUrl:"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",title:"Unicorn Head", desription:"Someone wearing a creepy unicorn head mask", keyword:"unicorn", horns:1}]
         return (
                <>
                    {
                        images.map(element=>{
                            return <UserData ImgUrl={element.image_url} title={element.title} desription={element.description} keyword={element.keyword}  horns = {element.horns}/>
                            })
                    }
                    
                </>
        )
    }
}

export default Main;