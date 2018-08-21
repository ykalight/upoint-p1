import React, { Component } from 'react';
import {MdAdd} from 'react-icons/lib/md';
import MediaQuery from 'react-responsive';

class FooterDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ulshow: 'none',
            labelClass: ""
        };
    }

    toggleShow(e){
        this.setState({
            ulshow: this.state.ulshow === "none" ? "" : "none",
            labelClass: this.state.labelClass === "" ? "active" : "",
        });
        e.preventDefault();
    }

  render() {
    
    return (
        <div className="footer-directory">
            <div>
                <ul>
                    <li><a href="/blank">Savings & Retirement</a></li>
                    <li><a href="/blank">Health & Insurance</a></li>
                    <li><a href="/blank">Work Management</a></li>
                    <li><a href="/blank">Life Changes</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="/blank">Your Well-Being</a></li>
                    <li><a href="/blank">Perks & Discounts</a></li>
                    <li><a href="/blank">Reimbursement Account</a></li>
                    <li><a href="/blank">Other Benefits</a></li>
                </ul>
            </div>
            <div className="border">
                <MediaQuery minWidth={741}>
                    <label>Language</label>
                    <ul>
                        <li><a href="/blank">English</a></li>
                        <li><a href="/blank">Español</a></li>
                    </ul>
                </MediaQuery>

                <MediaQuery maxWidth={740}>
                    <label className={this.state.labelClass} onClick={this.toggleShow.bind(this)} style={{cursor:'pointer'}}>Language<MdAdd className="expand"/></label>
                    <ul style={{display: this.state.ulshow}}>
                        <li><a href="/blank">English</a></li>
                        <li><a href="/blank">Español</a></li>
                    </ul>
                </MediaQuery>
            </div>
        </div>
    );
  }
}

export default FooterDirectory;
