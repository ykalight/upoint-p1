import React, { Component } from 'react';
import Social from './Social';
import LogoUpoint from './LogoUpoint';
import FooterDirectory from './FooterDirectory';

class Footer extends Component {

  render() {

    return (
        <footer>
            <div className="container">
                <FooterDirectory />
                <Social />

                <div className="fhr"></div>
                <LogoUpoint />
                <div className="copyright">&copy; 2019 Alight</div>
                <div className="tempSwitch">
                    <a href="http://www.hewittsolutions.com/demopack/premierco_upoint/release_7-4/home_v2.html">Classic homepage</a>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
