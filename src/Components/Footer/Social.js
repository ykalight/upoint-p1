import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Social extends Component {
  render() {

    return (
        <div className="social">
        <label>Stay connected</label>
        <Link to={"#"} title="Facebook"><i class="icon-facebook"></i></Link>
        <Link to={"#"} title="Twitter"><i class="icon-twitter"></i></Link>
        <Link to={"#"} title="LinkedIn"><i class="icon-linkedin"></i></Link>
        <Link to={"#"} title="Google Plus"><i class="icon-googleplus"></i></Link>
        <Link to={"#"} title="Instagram"><i class="icon-instagram"></i></Link>
        <Link to={"#"} title="YouTube"><i class="icon-youtube"></i></Link>
        <Link to={"#"} title="Pinterest"><i class="icon-pinterest"></i></Link>
        </div>
    );
  }
}

export default Social;