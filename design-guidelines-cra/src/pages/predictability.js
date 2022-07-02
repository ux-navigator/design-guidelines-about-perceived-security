import React from 'react';
import '../App.css';

import Simbol from "../img/simbol_predictability.png"
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
            <SideNav id={3} />
            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Predictability'} description={'예측 가능성(Predictability)은 앞으로 일어날 일에 대해 인지하거나 준비할 수 있게 함으로써 예측하지 못한 당황스러움을 방지하여 신뢰도를 높이는 방법입니다.'} img={Simbol} />
                    <PrincipleWhy title={'Why is predictability necessary?'} description={'사용자는 긴 프로세스를 진행할 때 현재 자신이 어느 단계에 있는지, 앞으로 어떤 단계가 남았는지 확인하고 싶어합니다. \n 또한 자신이 예측하지 못한 상황이 발생하였을 때 당황스러움 또는 불쾌감이 유발되어 서비스의 신뢰도에 부정적인 영향을 줄 수 있기 때문에 서비스를 예측할 수 있도록 돕는 것이 중요합니다. \n 본 가이드라인에서는 구체적인 예시를 통해 예측 가능성을 높이는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide predictability?'}
                        description={'사용자가 서비스를 쉽게 예측하게 하기 위해서 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'긴 프로세스를 진행할 때 절차에 대한 인지가 쉽도록 도와야 합니다.'}
                        li2={'피드포워드 및 피드백을 제공하여 서비스를 충분히 예상하고 준비할 수 있도록 해야 합니다.'}
                        littleTitle1={"절차 인지"}
                        bulletPoint1={"긴 프로세스에서는 상단에 progress bar를 제공하여 진척률을 표시하여 사용자가 현재 위치한 지점과 남은 task를 예측할 수 있도록 제공하는 것이 필요하다. \n 현재 절차의 목적과 수행 이유를 명확하게 인식시키기 위해 메인 콘텐츠를 강조하거나 상단에 타이틀을 간결하게 기재한다. \n 로딩 시 화면이 멈추지 않고 처리되고 있는 내용을 인지시키는 것이 필요하다. \n 다음, 완료 등 버튼 텍스트는 task를 예측하는 데 도움이 된다. \n 중요도에 따라 UI를 구분하여 중요한 액션을 할 때의 주의를 기울일 수 있도록 강조하는 것이 필요하다."}
                        littleTitle2={"피드포워드 / 피드백 제공"}
                        bulletPoint2={"자동이체 등록 전 안심 문구 제공 등 사용자가 불안해 할 여지가 있는 상황에 대한 사전의 안내를 제공해야 한다. \n 긴 프로세스 내에서 프로세스를 종료하고 싶을 경우를 대비하여 이전버튼 외에 한 번에 종료할 수 있는 종료버튼을 제공하는 것이 필요하다. \n 사용자의 행동 혹은 서비스의 업데이트에 대한 피드백을 최대한 자세히 제공하여 사용자가 서비스를 충분히 인지할 수 있도록 제공한다."}
                    />
                    <hr />
                    <PrincipleTip title={'Try it for controllability'} bulletPoint={'예상치 못한 개인정보 활용은 서비스의 신뢰도에 부정적인 영향을 미칠 수 있으니 사전에 안내가 필요하다.'} />
                    <Footer />
                </div>
            </main >
        </div >
    );
}

export default App;
