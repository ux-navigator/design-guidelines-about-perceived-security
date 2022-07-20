import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Header = (props) => {
    if (props.line == "header_line") {
        return (
            <header className="nav header_line" id="header">
                <h1 className="icon_home">
                    <Link to="/design-guidelines-about-perceived-security/">

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.6364 12.1524L16.2606 3.62863C15.9162 3.31329 15.4662 3.1384 14.9992 3.13843C14.5323 3.13846 14.0823 3.31341 13.7379 3.6288L4.36375 12.1523C4.17061 12.3282 4.01628 12.5424 3.9106 12.7813C3.80493 13.0202 3.75023 13.2785 3.75 13.5397V24.3749C3.75 24.6211 3.7985 24.865 3.89275 25.0925C3.98699 25.32 4.12512 25.5267 4.29926 25.7008C4.47339 25.8749 4.68012 26.013 4.90763 26.1072C5.13514 26.2014 5.37899 26.2499 5.62523 26.2499L11.2494 26.249C11.4981 26.249 11.7365 26.1502 11.9123 25.9744C12.0881 25.7986 12.1868 25.5601 12.1868 25.3115V17.8115H17.8118V25.3115C17.8118 25.5601 17.9106 25.7986 18.0864 25.9744C18.2621 26.1502 18.5006 26.249 18.7492 26.249L24.3748 26.2499H24.375C24.6212 26.2499 24.865 26.2014 25.0925 26.1072C25.32 26.0129 25.5267 25.8748 25.7008 25.7007C25.8749 25.5266 26.013 25.3199 26.1073 25.0924C26.2015 24.8649 26.25 24.6211 26.25 24.3749V13.5397C26.2498 13.2785 26.1951 13.0202 26.0894 12.7814C25.9837 12.5425 25.8295 12.3283 25.6364 12.1524Z" fill="#1E1E1E" />
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
