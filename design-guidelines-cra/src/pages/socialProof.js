import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_socialProof.png"
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
            <SideNav id={6} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Social Proof'} description={'사회적 증거(Social Proof)는 다수의 사용자들이 이 서비스를 함께 사용하고 있음을 알림으로써 안도감을 주는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is it necessary to social proof?'}
                        description={'사회적 증거란 사람들이 타인의 행동을 자신의 행동 지침으로 삼는 심리 현상을 뜻합니다. \n 다수의 사람들의 선택 및 긍정적인 의견을 공유 받은 사용자는 서비스를 보다 안심하고 사용할 수 있습니다. \n 본 가이드라인에서는 사회적 증거를 통해 신뢰도를 높이는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide social proof?'}
                        description={'다수의 사용자들이 이 서비스를 함께 사용하고 있음을 알리기 위하여 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'다수의 사용자들이 서비스를 선택했음을 전달합니다.'}
                        li2={'고객의 성향을 파악하여 유사한 집단의 선택을 전달합니다.'}
                        littleTitle1={"대중의 선택 전달"}
                        bulletPoint1={"최정보 제공 시 고객들의 신청 수, 페이지 뷰 수를 활용하여 콘텐츠를 소개하여 매력적으로 보이게 하는 것이 필요하다. \n 같은 소비자의 진정성 있는 리뷰를 통해 신뢰도를 높이고 서비스 품질에 대한 불확실성을 낮추는 것이 필요하다. "}
                        littleTitle2={"고객 성향에 따른 추천"}
                        bulletPoint2={"정보 제공 시 고객들의 신청 수, 페이지 뷰 수를 활용하여 콘텐츠를 소개하는 것이 필요하다. \n 고객 성향을 파악하여 유사한 집단의 선택사항이나 감안할 수 있는 서비스의 정보를 제공하는 것이 필요하다. "}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'대중의 행동을 전달하는 것을 광고로 생각하여 오히려 사용자의 부정적인 반응을 야기할 수 있으므로 UX Writing 시 주의가 필요하다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;
