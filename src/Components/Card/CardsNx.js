import React, { Component } from 'react';
import Button from '../Common/Button';
import dataQuicklinks from '../../data/quicklinks';
import TestFlip from './TestFlip';

import CardTimeoff from './CardTimeoff';
import CardRetirement from './CardRetirement';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/lib/md';

let arrowDirection = <MdKeyboardArrowDown />

class CardsNx extends Component {
  constructor(props){
    super(props);
    this.state = {
      editclass: "",
      small_show: 5,
      med_show: 4,
      showall: false,
      showallsmall: false,
      quicklinksdata: [],
      btLabel: "More...",
      showpin: false,
      showpinsmall: false
    }
    this._showAll = this._showAll.bind(this);
    this._showDefault = this._showDefault.bind(this);
    this._showQuickAll = this._showQuickAll.bind(this);
    this._showQuickDefault = this._showQuickDefault.bind(this);
  }

  getData(){
    this.setState({
        quicklinksdata: dataQuicklinks
    })
}

  componentWillMount(){
      this.getData();
      this.state.showallsmall ? arrowDirection = <MdKeyboardArrowUp /> : arrowDirection = <MdKeyboardArrowDown/>
  }

  _showAll(e) {
        this.setState(
            {showall: true, editclass: "active", btLabel: "Less...", showpin: true}
        );
        e.preventDefault();
    }

  _showDefault(e) {
      this.setState(
          {showall: false,  editclass: "", btLabel: "More...", showpin: false}
      );
      e.preventDefault();
  }

  _showQuickAll() {
      let cnt = this.state.quicklinksdata.length;
        this.setState(
            {small_show: cnt, showallsmall: true, showpinsmall: true}
        );
        arrowDirection = <MdKeyboardArrowUp /> 
    }

  _showQuickDefault() {
      this.setState(
          { small_show: 5, showallsmall: false,  showpinsmall: false}
      );
      arrowDirection = <MdKeyboardArrowDown /> 
  }

  render() {

    return (
        <div className={`${this.state.editclass} container card-container`} ref={ re => { this.Cardtop = re }}>

          <div className="ql-container">
            <div className="card quicklinks">
              {/* {quickItems} */}
              <TestFlip showpin={this.state.showpinsmall} initialShow={this.state.small_show}/>
              <div className="quicklinks__trigger" onClick={this.state.showallsmall ? this._showQuickDefault : this._showQuickAll}>{arrowDirection}</div>
            </div>
          </div>
          
          {/* {cardItems} */}
          <CardRetirement showpin={this.state.showpin} />
          <CardTimeoff showpin={this.state.showpin} />
          
          <div className="more">
            <Button addclass="button button--outline" destination="#" isShowAll={this.state.showall} label={this.state.btLabel} onClick={this.state.showall ? this._showDefault : this._showAll} />
          </div>

        </div>
    );
  }
}

export default CardsNx;
