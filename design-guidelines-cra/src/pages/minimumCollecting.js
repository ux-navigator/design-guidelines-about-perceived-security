import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_minimumCollecting.png"
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
            <Header line="header_line" />
            <SideNav id={5} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Minimum Collecting'} description={'최소 수집(Minimum Collecting)은 최소한의 정보를 수집하고 반복 수집하지 않음으로써 개인 정보를 잘 관리한다는 인상을 주어 신뢰도를 높이는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is it necessary to minimum collecting?'}
                        description={'다수의 인증수단을 생성하는 것은 제3자의 침입의 경우의 수를 늘리는 우려로 이어져 불안을 높일 수 있습니다. \n 사전에 제공한 개인 정보의 중복 수집은 서비스의 개인 정보 관리 능력에 불신을 가지게 될 수 있습니다. \n 본 가이드라인에서는 최소 수집을 통해 신뢰도를 높이는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide minimum collecting?'}
                        description={'최소 수집으로 신뢰도를 높이기 위해서 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'사용자의 정보를 최소 단위로 수집해야 합니다.'}
                        li2={'이미 제공받은 정보에 대해서 중복으로 수집하지 않아야 합니다.'}
                        littleTitle1={"최소 단위 수집"}
                        bulletPoint1={"최소한의 정보만 받아 로그인 정보를 한 번에 등록할 수 있도록 해야 한다. \n 서비스의 장기적인 미사용 시 데이터 연동이 해제되도록 설계하는 것이 필요하다. \n 중복 로그인 시 로그인이 끊어지도록 설계하는 것이 필요하다. \n 탈퇴 시 데이터들을 절대 남기지 않는다는 것을 고지 하는 것이 필요하다."}
                        littleTitle2={"중복 수행 최소화"}
                        bulletPoint2={"본인 인증 후 서비스 종료 전까지 본인 인증의 키를 계속 가져갈 수 있도록 설계하는 것이 필요하다. \n 주소나 핸드폰번호 등 호출될 수 있는 부분은 호출하여 입력 과정을 최소화 시켜야 한다. \n 인증 수단을 간결화하고 중복 과정을 최대한 제거하여 최소한의 Flow로 절차를 쉽게 수행할 수 있도록 설계해야 한다."}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'데이터 연동 해제 시 사용자들에게 다시 연동하는 피로감을 줄 수 있기 때문에 데이터 연동 해제 시점를 설계하는 데 주의가 필요하다. \n 연동 해제 시 사용자의 피로도를 높이지 않도록 연동이 해제된 이유를 설명하고 재연동이 쉽고 자연스럽게 이어져야 한다. \n 로그인 후 진행되는 인증 관련한 절차는 꼭 필요한지, 제거할 수 있는지 프로세스를 검토하는 것이 필요하다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;
