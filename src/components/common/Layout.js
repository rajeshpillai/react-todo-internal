import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <Header />

          <div className="inner cover">
            {this.props.children}
          </div>


         <Footer />

        </div>
    </div>
     
    );
  }
}

export default Layout;
