import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';
import {Link} from 'react-router-dom';

class QuicklinkItem extends Component {
    constructor(){
        super();
        this.state = {
          showpin: null
        }
      }

    componentDidMount() {
        this.setState({
            showpin: this.props.showpin
        })
    }

    render() {
        return (
            <FadeIn>
            <div className="quicklinkItem">
                {this.state.showpin && (<Pin />)}
                
                <Link to={this.props.ql.destination}>
                    <div className={`ficon-${this.props.ql.icon} upoint-ficon ql`}></div>
                    <label>{this.props.ql.title}</label>
                </Link>
            </div>
            </FadeIn>
        );
    }
}

export default QuicklinkItem;