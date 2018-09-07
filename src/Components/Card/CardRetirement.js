import React, { Component } from 'react';
import $ from 'jquery';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';
import FadeIn from 'react-fade-in';
import Pin from '../Utility/Pin';
import Detail401k from '../Content/Detail401k';

let arrowDirection = <MdKeyboardArrowDown />,
cardtopStyle = {
    cursor: 'pointer'
}

class CardItem extends Component {
    constructor(props) {
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this);
        this.state = { 
            visible: 'panel',
            active: 'Card'
        };
    }

    _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle();
        this.setState(
            { 
                active: this.state.active === 'Card'? 'Card active' : 'Card'
            }
        );
        this.state.active === 'Card' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    componentWillMount(){
        this.state.active === 'Card active' ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
    }

    render() {

        return (
        <FadeIn>
            {this.props.showpin && (<Pin classname="cardpin" />)}
        <div className={this.state.active} > 
            <div className="cardTop" onClick={this._toggleDiv} style={cardtopStyle}>
                <div className="icon">
                    <div></div>
                </div>
                <h3>Retirement accounts
                    <p>as of August 31, 2018</p>
                    {/* <p style={{color:'#f00', fontWeight:'bold'}}>! You're not on track</p> */}
                </h3>
                <div className="visual">
                    <div id="tempGraph_00"></div>
                </div>
                <div className="arrow">
                    {arrowDirection}
                </div>
            </div>
            
            <div className="panel" ref="toggle-div">
                <div>
                    <Detail401k />
                </div>
            </div>

        </div>
        </FadeIn>
        );
    }
}

export default CardItem;