import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

export default class BaiTapReactJS extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}
