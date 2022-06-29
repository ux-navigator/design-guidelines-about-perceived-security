import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ImagesCoherence from "../img/Coherence.png";
import ImagesControllability from "../img/Controllability.png";
import ImagesPredictability from "../img/Predictability.png";
import ImagesInformationConveying from "../img/Information-Conveying.png";
import ImagesMinimumCollecting from "../img/Minimum-Collecting.png";
import ImagesSocialProof from "../img/Social-Proof.png";
import ImagesErrorHandling from "../img/Error-Handling.png";


const Header = () => {
    return (
        <header className="nav" id="header">
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

const DesignPrinciplesTitle = () => {
    return (
        <div id="dsign_principles_title">
            <h1 className="title_2">Design Principles for Perceived Security</h1>
            <h1 className="title_2 mb_8">Specialized in Fintech.</h1>
            <p className="body_2 gray_1">사용자가 서비스를 경험하면서 보안의 수준이 우수하다고 인지하게 하기 위한 가이드라인입니다.</p>
            <p className="body_2 gray_1">각 디자인 원칙과 이를 지키기 위한 구체적인 예시를 포함하여 디자인 및 의사결정 시 활용할 수 있도록 작성하였습니다.</p>
        </div>
    );
}

const PrinciplesThumbnail = (props) => {
    function handleThumbnailClick() {
        const link = props.link;
        window.location.href = link;
    }

    return (
        <div onClick={handleThumbnailClick} className="principlesThumbnail mr_30 btn">
            <img className="PrinciplesThumbnail_img" src={props.img} />
            <h2 className="title_5 mb_8">{props.title}</h2>
            <div className="PrinciplesThumbnail_description">
                <p className="body_2 gray_1">{props.description}</p>
            </div>
        </div>
    );

}

const PrinciplesThumbnail_mr_0 = (props) => {
    function handleThumbnailClick() {
        const link = props.link;
        window.location.href = link;
    }

    return (
        <div onClick={handleThumbnailClick} className="principlesThumbnail btn">
            <img className="PrinciplesThumbnail_img" src={props.img} />
            <h2 className="title_5 mb_8">{props.title}</h2>
            <div className="PrinciplesThumbnail_description">
                <p className="PrinciplesThumbnail_description body_2 gray_1">{props.description}</p>
            </div>
        </div>
    );

}

const WelcomeToYourComments = () => {
    return (
        <div id="WELCOME-TO-YOUR-COMMENTS" >
            <div className="left_title">
                <h2 className="title_3">WELCOME TO</h2>
                <h2 className="title_3">YOUR COMMENTS</h2>
            </div>
            <div id="WELCOME-TO-YOUR-COMMENTS_text" className="align_right">
                <p className="body_2 gray_1">Design Guidelines for Perceived Security에 대해 문의사항이나 개선해야 할 점, 아이디어 등이 있다면 자유롭게 의견을 전달해주세요.</p>
                <p>&nbsp;</p>
                <p className="body_2 gray_1">Contact me here.</p>
                <p className="body_2 blue"><a href="#">jiny1756@gmail.com</a></p>
            </div>


        </div >
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
            <main className="container" id="container">
                <div className="content" id="content1">
                    <DesignPrinciplesTitle />

                    <PrinciplesThumbnail img={ImagesCoherence} title="Coherence" description="일관된 디자인 요소로 일관된 사용자 경험을 제공함으로써 서비스의 완성도를 높게 느끼게 하여 신뢰도를 높이는 방법을 알 수 있습니다." link="coherence.html" />
                    <PrinciplesThumbnail img={ImagesControllability} title="Controllability" description="사용자가 선택권을 가지고 서비스의 기능이나 정보 수집을 제어할 수 있다는 느낌을 줌으로써 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail_mr_0 img={ImagesPredictability} title="Predictability" description="앞으로 일어날 일에 대해 인지하거나 준비할 수 있게 함으로써 예측하지 못한 당황스러움을 방지하여 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail img={ImagesInformationConveying} title="Information Conveying" description="사용자 입장에서 필요한 정보를 쉽게 인지하고 이해할 수 있게 제공함으로써 사용자가 느낄 수 있는 의문사항을 해소하고 친절함을 느끼게 하고 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail img={ImagesMinimumCollecting} title="Minimum Collecting" description="최소한의 정보를 수집하고 반복 수집하지 않음으로써 개인 정보를 잘 관리한다는 인상을 주어 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail_mr_0 img={ImagesSocialProof} title="Social Proof" description="다수의 사용자들이 이 서비스를 함께 사용하고 있음을 알림으로써 안도감을 주는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail img={ImagesErrorHandling} title="Error Handling" description="사용자의 실수나 보안 사고를 방지할 수 있는 안전 장치를 제공하고 오류 발생 시 원인을 인지하고 대처할 수 있도록 피드백 함으로써 불안이나 당황을 줄여 사용자를 안심하게 하는 방법을 알 수 있습니다." />
                    <div className="mb_180"> </div>
                    <WelcomeToYourComments />

                </div>
                <Footer />
            </main >
        </div >
    );
}

export default App;
