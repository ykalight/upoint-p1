import React, { Component } from 'react';
import uuid from 'uuid';
import QuicklinkItem from './QuicklinkItem';

class Quicklink extends Component {
    // constructor(){
    //     super();
    //     this.state = {
          
    //     }
    //   }

  render() {
    

    return (
        <div className="ql-container">
            <div className="Card quicklinks">
                {quickItems}
            </div>
        </div>
    );
  }
}

export default Quicklink;
