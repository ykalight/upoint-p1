import React, { Component } from 'react';
import {MdKeyboardArrowRight} from 'react-icons/lib/md';
import {Link} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';

let arrowDirection = <MdKeyboardArrowRight />

class CardTimeoff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: 'Card'
        };
    }

    render() {
        return (
        <FadeIn>
            {this.props.showpin && (<Pin classname="cardpin" />)}
            <Link to="/blank">
                <div className={this.state.active}> 
                    <div className="cardTop nonexpand">
                        <div className="icon">
                            <div></div>
                        </div>
                        <h3>Time off
                            <p>as of August 31, 2018</p>
                        </h3>
                        <div className="visual">
                            <div className="datavis">
                                <div className="dvis-container semiborder">
                                    <div className="dvis-data">58.2 <span className="dvis-small">hrs</span></div>
                                    <label>Non Union - Vacation</label>
                                </div>
                                <div className="dvis-container semiborder">
                                    <div className="dvis-data">20.5 <span className="dvis-small">hrs</span></div>
                                    <label>Non Union - Personal Day</label>
                                </div>
                                <div className="dvis-container semiborder">
                                    <div className="dvis-data">130.0 <span className="dvis-small">hrs</span></div>
                                    <label>Non Union - Sick/Injury Off the Job</label>
                                </div>
                            </div>
                        </div>
                        <div className="arrow">
                            <span>{arrowDirection}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
        );
    }
}

export default CardTimeoff;