import React, { Component } from 'react';
import uuid from 'uuid';
import CardNxItem from './CardNxItem';
import Button from '../Common/Button';
import QuicklinkItem from './QuicklinkItem';
import dataQuicklinks from '../../data/quicklinks';
import scrollToComponent from 'react-scroll-to-component';

class CardsNx extends Component {
  constructor(props){
    super(props);
    this.state = {
      editclass: "",
      small_show: 5,
      med_show: 4,
      showall: false,
      quicklinksdata: [],
      btLabel: "More...",
      showpin: false
    }
    this._showAll = this._showAll.bind(this);
    this._showDefault = this._showDefault.bind(this);
  }

  getData(){
    this.setState({
        quicklinksdata: dataQuicklinks
    })
}

componentWillMount(){
    this.getData();
}

_showAll() {
    let cnt = this.state.quicklinksdata.length;
      this.setState(
          { 
            small_show: cnt, showall: true, editclass: "active", btLabel: "Less...", showpin: true
          }
      );
      this.scrollTo()
  }

  _showDefault() {
      this.setState(
          { 
            small_show: 5, showall: false,  editclass: "", btLabel: "More...", showpin: false
          }
      );
      this.scrollTo()
  }

  scrollTo() {
    scrollToComponent(this.Cardtop, { offset: -120, align: 'top', duration: 500})
  }

  render() {
    
    let quickItems;
    if(this.state.quicklinksdata){
        quickItems = this.state.quicklinksdata.slice(0, `${this.state.small_show}`).map(ql => {
            return (
                <QuicklinkItem key={uuid.v4()} ql={ql} showpin={this.state.showpin} />
            )
        });
    }

    let cardItems;
    if(this.props.cardsdata){
      cardItems = this.props.cardsdata.map(card => {
        return (
          <CardNxItem key={uuid.v4()} card={card} showpin={this.state.showpin} />
        )
      });
    }

    return (
        <div className={`${this.state.editclass} container card-container`} ref={ re => { this.Cardtop = re }}>

          <div className="ql-container">
            <div className="Card quicklinks">
              {quickItems}
            </div>
          </div>

          {cardItems}
          
          <div className="more">
            <Button addclass="button bt-outline" destination="#" isShowAll={this.state.showall} label={this.state.btLabel} onClick={this.state.showall ? this._showDefault : this._showAll} />
          </div>

        </div>
    );
  }
}

export default CardsNx;
