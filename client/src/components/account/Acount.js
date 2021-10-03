import React, { Component } from 'react';
import "./acount.css"
import { Link } from "react-router-dom";

class Acount extends Component {
    render() {
        return (

            <div className="col-sm-3">
                <div className="border-left">
                    <ul>
                        <Link to="/users"><li>List User</li></Link>
                        <li>Action User</li>
                        <li>Assignment User</li>
                        <li>Issue User</li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Acount