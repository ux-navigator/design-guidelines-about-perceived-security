import React from 'react';
import '../App.css';
import ImagesMockup01 from "../img/mockup01.png";

const CardDownloadTitle = () => {
    function handleCardDwnloadClick() {
        window.open(
            'https://drive.google.com/file/d/1EDOWIqFFIwdGOzk1jeqfFF-5eKkLr9kx/view?usp=sharing',
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    return (
        <div>
            <div id="dsign_principles_title">
                <h1 className="title_2">You can download </h1>
                <h1 className="title_2">the design guideline card</h1>
                <p className="body_2 gray_1">이 가이드라인은 웹페이지 뿐만 아니라 디자인 협업 및 의사결정 시 유용하게 쓰일 수 있도록 아코디언 카드 형태로도 제작되었습니다.</p>
                <p className="body_2 gray_1">아래의 링크에서 누구나 다운받아 출력하여 사용할 수 있습니다.</p>
            </div>
            <button onClick={handleCardDwnloadClick} className="btn1 btn">카드 다운받기
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1L21 8L15 15" stroke="white" stroke-width="2" />
                    <path d="M0 8H20.3349" stroke="white" stroke-width="2" />
                </svg>

            </button>
        </div>

    );
}

const Mockup_1 = (props) => {
    return (
        <img id="mockup01" src={props.img} alt="mockup" />
    );
}

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <hr className="footer_hr" />
                <p className="body_2 _1">ⓒ Lee Jinyoung 2022 ・</p>
                <p className="gray_1 btn line">CONTACT</p>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <main className="container" id="container">
                <div className="content" id="content1">

                    <CardDownloadTitle />
                    <div className='mb_150'></div>
                    <Mockup_1 img={ImagesMockup01} />
                    <Footer />
                </div>

            </main >
        </div >
    );
}

export default App;