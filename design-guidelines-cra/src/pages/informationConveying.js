import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_informationConveying.png"
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
            <SideNav id={4} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Information Conveying'} description={'정보 전달성(Information Conveying)은 사용자 입장에서 필요한 정보를 쉽게 인지하고 이해할 수 있게 제공함으로써 사용자가 느낄 수 있는 의문사항을 해소하고 친절함을 느끼게 하여 신뢰도를 높이는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is it necessary to information conveying?'}
                        description={'사용자는 개인정보를 입력하거나 약관을 동의할 때 빠르게 이해하고 처리하고 싶어합니다. \n 그러나 서비스 사용의 불안을 낮추고 싶어하기 때문에 정보를 잘 전달받기를 윈합니다. \n 본 가이드라인에서는 구체적인 예시를 통해 정보를 잘 전달할 수 있는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide information conveying?'}
                        description={'서비스의 정보를 잘 전달하기 위해서 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'사용자가 느낄 수 있는 의문 사항을 해소할 수 있어야 합니다.'}
                        li2={'친절한 설명으로 사용자를 배려해야 합니다.'}
                        li3={'소통의 창구를 늘려 의사소통의 답답함을 줄여야 합니다.'}
                        li4={'한 페이지에 한 번의 주요한 액션을 하도록 설계합니다.'}
                        littleTitle1={"의문 해소"}
                        bulletPoint1={"툴팁을 제공하여 고객센터를 이용하지 않아도 의문이 해소될 수 있도록 제공한다. \n 사용자가 알아야 할 내용을 정확히 기술하고 누락되지 않도록 한다. \n 온보딩 시 기능과 자신의 데이터가 어떻게 사용되는지 이해할 수 있는 페이지를 제공한다."}
                        littleTitle2={"친절한 설명"}
                        bulletPoint2={"어려운 정보는 시각화하여 시인성을 높이고 구체적인 예시와 자주하는 질문에 대한 답변 등을 제공한다. \n 고객의 컨텍스트에 따라 변화되는 개인화 콘텐츠를 제공하여 챙겨준다는 느낌을 전달한다. \n 사용자의 이점을 강조한 표현으로 서비스에 애착을 가지도록 한다."}
                        littleTitle3={'소통의 창구 증대'}
                        bulletPoint3={'챗봇이나 카톡 상담 등을 통해 빈번하게 질문되는 문제를 빠르게 대응하는 것이 필요하다. \n 알림을 통해 서비스가 자신을 계속 챙겨주고 있다는 느낌을 줄 수 있다.'}
                        littleTitle4={'원 페이지 원 액션'}
                        bulletPoint4={'한 페이지에 한 번의 주요한 액션을 하도록 설계하는 것은 사용자가 내용을 충분히 이해하고 넘어갈 수 있도록 할 수 있다.'}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'서비스의 브랜드 이미지를 고려하여 키워드를 도출해보고 이를 참고하여 보이스 톤을 설정한다. \n 마냥 친구 같은 어투나 가벼운 농담은 서비스의 전문성이나 신뢰감을 떨어뜨릴 수도 있기 때문에 주의하여야 한다. \n 서비스의 타겟 사용자들의 전문성 정도를 파악하여 그 군집에 어울리는 용어의 난이도를 정하고 조절하는 것이 좋다. \n 전 보편화된 전문 용어 및 금융 용어는 일부러 쉽게 바꾸지 않고 기존에 사용하면 용어를 활용한다. \n 단어나 문장을 쉽고 간단하게 기술하기 위해 누락된 정보가 발생하거나 구체적이지 않게 기술하면 커뮤니케이션의 오류가 발생할 수 있기 때문에 주의하여야 한다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;
