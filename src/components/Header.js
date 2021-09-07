import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
           <header>
      <a href="#" class="logo">Doing Labs</a>
      <div id="menu-bar"></div>
      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#about">about</a>
        <a href="#usage">usage</a>
        <a href="#review">review</a>
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
            </>
        )
    }
}
export default Header
