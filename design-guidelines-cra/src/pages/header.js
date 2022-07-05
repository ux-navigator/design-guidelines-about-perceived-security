import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Header = (props) => {
    if (props.line == "header_line") {
        return (
            <header className="nav header_line" id="header">
                <h1 className="icon_home">
                    <Link to="/design-guidelines-about-perceived-security/">

                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <g fill="#000" fill-rule="nonzero">
                                    <g>
                                        <g>
                                            <path
                                                d="M7.522.124L.224 5.822c-.141.111-.224.28-.224.46v9.634c0 .323.261.584.584.584h6.57v-4.742h1.469V16.5h6.556c.322 0 .584-.261.584-.584V6.282c0-.18-.083-.349-.225-.46L8.241.124c-.212-.165-.508-.165-.72 0z"
                                                transform="translate(-32.000000, -87.000000) translate(32.000000, 87.000000) translate(7.120000, 6.100000)">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </Link>
                </h1>
                <div className="gnb_wrap">
                    <nav id="gnb" className="gnb hover_color">
                        <ul className="dep1">

                            <li><Link to="/design-guidelines-about-perceived-security/guidelines">Design Guidelines</Link></li>
                            <li><Link to="/design-guidelines-about-perceived-security/download">Card Download</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    } else {
        return (
            <header className="nav" id="header">
                <h1 className="icon_home">
                    <Link to="/design-guidelines-about-perceived-security/">

                        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <g fill="#000" fill-rule="nonzero">
                                    <g>
                                        <g>
                                            <path
                                                d="M7.522.124L.224 5.822c-.141.111-.224.28-.224.46v9.634c0 .323.261.584.584.584h6.57v-4.742h1.469V16.5h6.556c.322 0 .584-.261.584-.584V6.282c0-.18-.083-.349-.225-.46L8.241.124c-.212-.165-.508-.165-.72 0z"
                                                transform="translate(-32.000000, -87.000000) translate(32.000000, 87.000000) translate(7.120000, 6.100000)">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </Link>
                </h1>
                <div className="gnb_wrap">
                    <nav id="gnb" className="gnb hover_color">
                        <ul className="dep1">

                            <li><Link to="/design-guidelines-about-perceived-security/guidelines">Design Guidelines</Link></li>
                            <li><Link to="/design-guidelines-about-perceived-security/download">Card Download</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}

export default Header;
