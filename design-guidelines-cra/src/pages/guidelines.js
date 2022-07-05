import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import ImagesCoherence from "../img/Coherence.png";
import ImagesControllability from "../img/Controllability.png";
import ImagesPredictability from "../img/Predictability.png";
import ImagesInformationConveying from "../img/Information-Conveying.png";
import ImagesMinimumCollecting from "../img/Minimum-Collecting.png";
import ImagesSocialProof from "../img/Social-Proof.png";
import ImagesErrorHandling from "../img/Error-Handling.png";
import WelcomeYourComments from "./welcomYourComments"
import Footer from './footer';


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
    const link = "" + props.link;
    return (
        < Link to={link} >
            <div className="principlesThumbnail mr_30 btn">
                <img className="PrinciplesThumbnail_img" src={props.img} />
                <h2 className="title_5 mb_8 black">{props.title}</h2>
                <div className="PrinciplesThumbnail_description">
                    <p className="body_2 gray_1">{props.description}</p>
                </div>
            </div>
        </Link >
    );

}

const PrinciplesThumbnail_mr_0 = (props) => {
    const link = "" + props.link;
    return (
        < Link to={link} >
            <div className="principlesThumbnail btn">
                <img className="PrinciplesThumbnail_img" src={props.img} />
                <h2 className="title_5 mb_8 black">{props.title}</h2>
                <div className="PrinciplesThumbnail_description">
                    <p className="body_2 gray_1">{props.description}</p>
                </div>
            </div>
        </Link >
    );


}

const App = () => {
    return (
        <div>
            <main className="container" id="container">
                <div className="content" id="content1">
                    <DesignPrinciplesTitle />
                    <div className='mb_150'></div>
                    <PrinciplesThumbnail link="/coherence" img={ImagesCoherence} title="Coherence" description="일관된 디자인 요소로 일관된 사용자 경험을 제공함으로써 서비스의 완성도를 높게 느끼게 하여 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail link="/controllability" img={ImagesControllability} title="Controllability" description="사용자가 선택권을 가지고 서비스의 기능이나 정보 수집을 제어할 수 있다는 느낌을 줌으로써 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail_mr_0 link="/predictability" img={ImagesPredictability} title="Predictability" description="앞으로 일어날 일에 대해 인지하거나 준비할 수 있게 함으로써 예측하지 못한 당황스러움을 방지하여 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail link="/informationConveying" img={ImagesInformationConveying} title="Information Conveying" description="사용자 입장에서 필요한 정보를 쉽게 인지하고 이해할 수 있게 제공함으로써 사용자가 느낄 수 있는 의문사항을 해소하고 친절함을 느끼게 하고 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail link="/minimumCollecting" img={ImagesMinimumCollecting} title="Minimum Collecting" description="최소한의 정보를 수집하고 반복 수집하지 않음으로써 개인 정보를 잘 관리한다는 인상을 주어 신뢰도를 높이는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail_mr_0 link="/socialProof" img={ImagesSocialProof} title="Social Proof" description="다수의 사용자들이 이 서비스를 함께 사용하고 있음을 알림으로써 안도감을 주는 방법을 알 수 있습니다." />
                    <PrinciplesThumbnail link="/errorHandling" img={ImagesErrorHandling} title="Error Handling" description="사용자의 실수나 보안 사고를 방지할 수 있는 안전 장치를 제공하고 오류 발생 시 원인을 인지하고 대처할 수 있도록 피드백 함으로써 불안이나 당황을 줄여 사용자를 안심하게 하는 방법을 알 수 있습니다." />

                    <div className="mb_180"> </div>
                    <WelcomeYourComments />
                    <Footer />
                </div>

            </main >
        </div >
    );
}

export default App;
