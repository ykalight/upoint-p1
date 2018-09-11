import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight, MdError} from 'react-icons/lib/md';

let dataStyle = {
    flexDirection:'column',
    alignItems: 'flex-start'
}, 
warnStyle = {maxWidth:'28%'}

class Detail401k extends Component {

    render() {

        return (
            <div className="card-detail">
                <div className="card-detail-head">    
                    <h4>401(k)</h4>
                    <div className="action">
                        <Link to="/blank"><span className="ficon-graph-bar-outline upoint-ficon"></span>Investments</Link>
                    </div>
                </div>
                <div className="card-detail-row">    
                    <h5>Contributions</h5>
                    <div style={warnStyle}>
                        <p className="warn"><MdError style={{fontSize:'1.2em'}} /> You're not getting the full company match</p>
                    </div>
                    <div style={dataStyle}>
                        <div className="data">5%</div>
                        <label>before tax</label>
                    </div>
                    <div style={dataStyle}>
                        <label>Paycheck deduction</label>
                        <div className="data smaller">$335.14</div>
                    </div>
                    <div>
                        <Link className="button" to="/blank">Get the full match</Link>
                    </div>
                </div>
                <div className="card-detail-row">    
                    <h5>
                        Account activity
                        <div>as of Nov 12, 2018</div>
                    </h5>
                    <div style={dataStyle}>
                        <label>Opening balance</label>
                        <div className="data">$123,400.14</div>
                    </div>
                    <div style={dataStyle}>
                        <label>Closing balance</label>
                        <div className="data">$117,400.14</div>
                    </div>
                    <div style={dataStyle}>
                        <label className="highlight">Loan balance</label>
                        <div className="data smaller highlight">$20,000.00</div>
                    </div>
                    <div>
                        <Link to="/blank">Full account activity</Link>
                    </div>
                </div>
                <div className="card-detail-row">    
                    <h5>
                        Account projection
                    </h5>
                    <div style={warnStyle}>
                        <p className="warn"><MdError style={{fontSize:'1.2em'}} /> You're not on track</p>
                    </div>
                    <div style={dataStyle}>
                        <label>Estimated income</label>
                        <div className="data">$2,965.94<span>/mo</span></div>
                    </div>
                    <div style={dataStyle}>
                        <label>Poor market</label>
                        <div className="data smaller">$1,789.99<span>/mo</span></div>
                    </div>
                    <div>
                        <a>See how you can do better</a>
                    </div>
                </div>
                <div className="card-detail-last">    
                    <Link to="/blank">More 401(k) account details <MdKeyboardArrowRight /></Link>
                </div>

                {/* ======================= Section ======================== */}

                <div className="card-detail-head">    
                    <h4>Non-qualified savings</h4>
                    <div className="action">
                        <Link to="/blank"><span className="ficon-graph-bar-outline upoint-ficon"></span>Investments</Link>
                    </div>
                </div>
                <div className="card-detail-row">    
                    <h5>Contributions</h5>
                    <div style={dataStyle}>
                        <div className="data">4%</div>
                        <label>before tax</label>
                    </div>
                    <div style={dataStyle}>
                        <label>Paycheck deduction</label>
                        <div className="data smaller">$219.22</div>
                    </div>
                    <div>
                        <Link to="/blank">Change contribution</Link>
                    </div>
                </div>
                <div className="card-detail-row">    
                    <h5>
                        Account activity
                        <div>as of Nov 12, 2018</div>
                    </h5>
                    <div style={dataStyle}>
                        <label>Opening balance</label>
                        <div className="data">$69,590.23</div>
                    </div>
                    <div style={dataStyle}>
                        <label>Closing balance</label>
                        <div className="data">$69,740.11</div>
                    </div>
                    <div>
                        <Link to="/blank">Full account activity</Link>
                    </div>
                </div>
                <div className="card-detail-last">    
                    <Link to="/blank">More Non-qualified savings account details<MdKeyboardArrowRight /></Link>
                </div>
            </div>
        );
    }
}

export default Detail401k;