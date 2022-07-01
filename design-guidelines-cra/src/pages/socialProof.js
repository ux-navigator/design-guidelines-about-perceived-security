import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImageGroup_73 from "../img/Group_73.png"



const Header = () => {
    return (
        <header className="nav header_line" id="header">
            <h1 className="icon_home">
                <Link to="/design-guidelines-about-perceived-security">

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

                        <li><Link to="/guidelines">Design Guidelines</Link></li>
                        <li><Link to="/download">Card Download</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

const SideNav = () => {
    return (
        <nav className='SideNav'>
            <ul>
                <Link to="/coherence"><li className='body_3 gray_2 nav_li'>Coherence</li></Link>
                <Link to="/controllability"><li className='body_3 gray_2 nav_li '>Controllability</li></Link>
                <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li '>Minimum Collecting</li></Link>
                <Link to="/socialProof"><li className='body_3 nav_li black bold'>Social Proof</li></Link>
                <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
            </ul>

        </nav>
    );
}

const PrincipleTitle = () => {
    return (
        <div className='PrincipleTitle'>
            <h2 className='title_3'>Social Proof</h2>
            <p className='body_2 gray_1 PrincipleTitle_de'>사회적 증거(Social Proof)는 다수의 사용자들이 이 서비스를 함께 사용하고 있음을 알림으로써 안도감을 주는 방법입니다.</p>
        </div>

    );
}

const PrincipleWhy = () => {
    return (
        <div className='PrincipleWhy'>
            <h2 className='title_4 mb_20'>Why is &#34;Social Proof&#34; necessary?</h2>
            <p className='body_2 gray_1'>사용자는 선택을 주도하지 못하고 서비스의 절차를 그대로 따라야만 하는 느낌을 받으면 쉽게 불안함을 느낍니다.  </p>
            <p className='body_2 gray_1'>자신이 서비스를 제어하고 있다는 느낌을 받을 때 안정감을 느끼고 신뢰하기 때문에 제어 가능성을 높이는 것이 중요합니다.</p>
            <p className='body_2 gray_1'>본 가이드라인에서는 구체적인 예시를 통해 제어 가능성을 높이는 방법에 대해 설명하고자 합니다.</p>
        </div>
    );
}

const PrincipleHowTo = (props) => {
    return (
        <div className='PrincipleHowTo'>
            <h2 className='title_4 mb_20'>How to provide controllability?</h2>
            <p className='body_2 gray_1'>사용자가 선택을 주도한다는 느낌을 받기 위해서 다음과 같은 사항이 적합한지 확인하세요.</p>
            <ul className='HowToList'>
                <li className='blue_C'>사용자가 명확하게 내용을 인지하여 어떤 선택을 할 수 있는지 파악하도록 합니다. </li>
                <li className='blue_C'>UX Writing이 일관되어야 합니다.</li>
                <li className='blue_C'>다수의 선택지를 제공하여 선택의 폭을 넓혀야 합니다.</li>
                <li className='blue_C'>최초 선택 이후에도 이를 쉽게 변경이 가능해야 합니다.</li>
            </ul>

            {/* <img src={props.img} /> */}
        </div>
    );
}



const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <hr className="footer_hr" />
                <p className="body_2 _1">ⓒ Lee Jinyoung 2022 ・</p>
                <a className="gray_1" href="#">CONTACT</a>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <SideNav />

            <main className="container" id="container">



                <div className='SidoToContents'>
                    <PrincipleTitle />
                    <PrincipleWhy />
                    <hr />
                    <PrincipleHowTo img={ImageGroup_73} />
                    <Footer />
                </div>


            </main >
        </div >
    );
}

export default App;
