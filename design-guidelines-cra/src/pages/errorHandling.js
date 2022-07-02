import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_errorHandling.png"
import Coherence_example1 from "../img/coherence_example1.png"
import Coherence_example2 from "../img/coherence_example2.png"
import Coherence_example5 from "../img/coherence_example5.png"
import Coherence_example6 from "../img/coherence_example6.png"

import Header from "./header";
import SideNav from './sideNavGuidelines';
import PrincipleTitle from './principleTitle';
import PrincipleWhy from './principleWhy';
import PrincipleHowTo from './principleHowTo';
import PrincipleTip from './principleTip';
import Footer from './footer';

const App = () => {
    return (
        <div>
            <Header />
            <SideNav id={7} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Error Handling'} description={'오류 처리(Error Handling)는 사용자의 실수나 보안 사고를 방지할 수 있는 안전 장치를 제공하고 오류 발생 시 원인을 인지하고 대처할 수 있도록 피드백 함으로써 불안이나 당황을 줄여 사용자를 안심하게 하는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is it necessary to error handling?'}
                        description={'오류 상황이 발생하는 것은 금융 서비스 신뢰도에 치명적인 영향을 줄 수 있으므로 오류 처리를 잘 설계하는 것이 필요합니다. \n 본 가이드라인에서는 구체적인 예시를 통행 오류를 처리하는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide serror handling?'}
                        description={'적절한 오류 처리를 위하여 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'오류가 발생할 수 있는 가능성이 있는 절차를 파악하여 사전에 사용자의 실수 방지하도록 설계합니다.'}
                        li2={'오류 발생 시 사용자들의 당황스러움을 줄이고 오류를 해결할 수 있도록 돕습니다.'}
                        littleTitle1={"실수 방지"}
                        bulletPoint1={"거래의 최종 단계에서 바텀 시트나 팝업 등을 통해 거래 내용을 한 번 더 확인할 수 있는 '예비 거래 정보 확인 단계'를 추가하는 것이 필요하다. \n 거래의 최종 단계에서 본인임을 확인하는 인증 과정이 필요하며, 사용자가 원할 시 인증 과정을 Skip할 수 있도록 하되 초기 설정은 인증 과정이 있도록 설계하는 것이 사용자를 안심시킨다."}
                        littleTitle2={"오류 상황 시 원인과 대처 방안 안내"}
                        bulletPoint2={"오류 상황 발생 후 오류가 난 원인 및 대처 방안 등의 안내 메시지를 쉽게 전달해야 한다. "}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'에러 상황이 발생할 수 있는 Case들을 정의한 후 그에 따른 안내 메세지를 정의한다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;
