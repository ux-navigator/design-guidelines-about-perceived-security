import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_controllability.png"
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
            <SideNav id={2} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Controllability'} description={'제어 가능성(Controllability)은 사용자가 선택권을 가지고 서비스의 기능이나 정보 수집을 제어할 수 있다는 느낌을 줌으로써 신뢰도를 높이는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is controllability necessary?'} description={'사용자는 선택을 주도하지 못하고 서비스의 절차를 그대로 따라야만 하는 느낌을 받으면 쉽게 불안함을 느낍니다. \n 자신이 서비스를 제어하고 있다는 느낌을 받을 때 안정감을 느끼고 신뢰하기 때문에 제어 가능성을 높이는 것이 중요합니다. \n 본 가이드라인에서는 구체적인 예시를 통해 제어 가능성을 높이는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide controllability?'}
                        description={'사용자가 선택을 주도한다는 느낌을 주기 위해서 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'사용자가 명확하게 내용을 인지하여 어떤 선택을 할 수 있는지 파악하도록 합니다.'}
                        li2={'다수의 선택지를 제공하여 선택의 폭을 넓혀야 합니다.'}
                        li3={'다크패턴을 최소화해야 합니다.'}
                        li4={'최초 선택 이후에도 이를 쉽게 변경이 가능해야 합니다.'}
                        littleTitle1={"명확한 내용 인지"}
                        bulletPoint1={"최소한의 인터랙션 방법으로 내용을 인지할 수 있도록 해야 한다. \n 선택 전 충분한 설명을 제공하기 위해 온보딩 페이지를 제공한다. \n 쉬운 선택지 파악을 위해 선택지의 명칭을 명확하고 쉽게 정리한다. \n UX Writing 시 공급자나 시스템 중심이 아닌 사용자가 주체가 될 수 있도록 작성하여 사용자가 주도하고 있다는 느낌을 제공할 필요가 있다."}
                        littleTitle2={"다수의 선택지 제공"}
                        bulletPoint2={"원하는 인증수단을 선택하여 등록할 수 있도록 해야 한다. \n 로그인 시 SNS 로그인 외의 선택지를 제공해야 한다. \n 기능에 대한 파악 및 선택이 쉽도록 사용자의 성향을 파악하고 성향에 따른 추천이나 제안을 제공하는 것이 좋다. \n 긴 태스크 수행 시 저장버튼과 재방문 시 저장한 내용을 호출하여 이어서 진행할 수 있도록 설계하는 것이 필요하다."}
                        littleTitle3={"다크패턴 최소화"}
                        bulletPoint3={"필수 / 선택 약관의 인지를 명확하게 하도록 디자인해야 한다. \n 필수항목만을 선택하는 체크버튼을 제공하는 것이 좋다."}
                        littleTitle4={"데이터 연동 관리 제어"}
                        bulletPoint4={"선택한 서비스 및 동의한 약관 내용, 데이터 활용 내역 등을 조망할 수 있는 페이지 제공하여 사용자가 충분히 인지할 수 있고 쉽게 변경 가능하도록 해야 한다."}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'SNS로그인 방식은 개인정보 유출의 불안도를 높일 수 있으니 다른 로그인 수단과 함께 제공하는 것이 필요하다. \n 인터랙션 방식을 설계할 때 약관의 양에 따라 피도로가 높아지지 않도록 설계가 필요하다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;

