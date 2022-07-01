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
                <Link to="/coherence"><li className='body_3 bold nav_li black'>Coherence</li></Link>
                <Link to="/controllability"><li className='body_3 gray_2 nav_li'>Controllability</li></Link>
                <Link to="/predictability"><li className='body_3 gray_2 nav_li'>Predictability</li></Link>
                <Link to="/informationConveying"><li className='body_3 gray_2 nav_li'>Information Conveying</li></Link>
                <Link to="/minimumCollecting"><li className='body_3 gray_2 nav_li'>Minimum Collecting</li></Link>
                <Link to="/socialProof"><li className='body_3 gray_2 nav_li'>Social Proof</li></Link>
                <Link to="/errorHandling"><li className='body_3 gray_2 nav_li'>Error Handling</li></Link>
            </ul>

        </nav>
    );
}

const PrincipleTitle = () => {
    return (
        <div className='PrincipleTitle'>
            <h2 className='title_3'>Coherence</h2>
            <p className='body_2 gray_1 PrincipleTitle_de'>일관성(Conherence)은 일관된 디자인 요소로 일관된 사용자 경험을 제공함으로써 서비스의 완성도를 높게 느끼게 하여 신뢰도를 높이는 방법입니다.</p>
        </div>

    );
}

const PrincipleWhy = () => {
    return (
        <div className='PrincipleWhy'>
            <h2 className='title_4 mb_20'>Why is coherence necessary?</h2>
            <p className='body_2 gray_1'>서비스를 이용하는 전반적인 경험의 일관성은 서비스를 사용하며 유발될 수 있는 불안함을 제거할 수 있습니다. </p>
            <p className='body_2 gray_1'>일관되지 않은 디자인 요소는 서비스의 완성도가 낮다고 판단하게 하며 이는 서비스의 보안의 우려로 이어질 수 있으며 서비스 이용 중 외부 서비스로 이동하는 과정에서 일관성이 무너지게 되면 자신의 정보가 공유될 수 있다는 불안감과 불쾌감이 증가할 수 있습니다.</p>
            <p className='body_2 gray_1'>따라서 서비스가 제공하는 사용자 경험의 일관성을 유지하는 것이 중요합니다.</p>
            <p className='body_2 gray_1'>본 가이드라인에서는 구체적인 예시를 통해 일관성을 유지하는 방법에 대해 설명하고자 합니다.</p>
        </div>
    );
}

const PrincipleHowTo = (props) => {
    return (
        <div className='PrincipleHowTo'>
            <h2 className='title_4 mb_20'>How to provide coherence?</h2>
            <p className='body_2 gray_1'>사용자 경험의 일관성을 지키기 위해서 다음과 같은 사항이 적합한지 확인하세요.</p>
            <ul className='HowToList'>
                <li className='blue_C'>UI의 디자인 요소가 일관되어야 합니다. </li>
                <li className='blue_C'>UX Writing이 일관되어야 합니다.</li>
                <li className='blue_C'>서비스 흐름이 일관되어야 합니다.</li>
                <li className='blue_C'>그래픽 디자인 요소과 일관되어야 합니다.</li>
                <li className='blue_C'>로그인 체계가 일관되어야 합니다.</li>
                <li className='blue_C'>타 서비스로 이동할 때 사용 경험이 자연스럽게 이어지도록 디자인 되어야 합니다.</li>
            </ul>

            <img src={props.img} />
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
