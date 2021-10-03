import React, { Component } from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faQuestion, faAlignJustify, faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="header">
                        <div className="col-3">
                            <div className="left">
                                <ul>
                                    <li><FontAwesomeIcon icon={faSearch} /></li>
                                    <li><FontAwesomeIcon icon={faPlus} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <ul>
                                <li><FontAwesomeIcon icon={faQuestion} /></li>
                                <li><FontAwesomeIcon icon={faUser} /></li>
                                <li><FontAwesomeIcon icon={faAlignJustify} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header