import React from 'react';
import '../App.css';
import Coherence_example1 from "../img/coherence_example1.png"
import Coherence_example2 from "../img/coherence_example2.png"
import Coherence_example5 from "../img/coherence_example5.png"
import Coherence_example6 from "../img/coherence_example6.png"

//react-scroll을 위한 import
// import styled from 'styled-components';
// import Middle from './Middle';
// import Side from './Side';


import Header from "./header";
import SideNav from './SideNavGuidelines';
import PrincipleTitle from './principleTitle';
import PrincipleWhy from './principleWhy';
import PrincipleHowTo from './principleHowTo';
import Footer from './footer';

const App = () => {

    return (

        <div>
            <Header />
            <SideNav />

            <main className="container" id="container">
                <div className='SidoToContents'>
                    <PrincipleTitle title={'Coherence'} description={'일관성(Conherence)은 일관된 디자인 요소로 일관된 사용자 경험을 제공함으로써 서비스의 완성도를 높게 느끼게 하여 신뢰도를 높이는 방법입니다.'} />
                    <PrincipleWhy title={'Why is coherence necessary?'} description={'서비스를 이용하는 전반적인 경험의 일관성은 서비스를 사용하며 유발될 수 있는 불안함을 제거할 수 있습니다. \n 일관되지 않은 디자인 요소는 서비스의 완성도가 낮다고 판단하게 하며 이는 서비스의 보안의 우려로 이어질 수 있으며 서비스 이용 중 외부 서비스로 이동하는 과정에서 일관성이 무너지게 되면 자신의 정보가 공유될 수 있다는 불안감과 불쾌감이 증가할 수 있습니다. \n 따라서 서비스가 제공하는 사용자 경험의 일관성을 유지하는 것이 중요합니다. \n 본 가이드라인에서는 구체적인 예시를 통해 일관성을 유지하는 방법에 대해 설명하고자 합니다.'} />
                    <hr />
                    <PrincipleHowTo title={'How to provide coherence?'}
                        description={'사용자 경험의 일관성을 지키기 위해서 다음과 같은 사항이 적합한지 확인하세요.'}
                        li1={'UI의 디자인 요소가 일관되어야 합니다. '}
                        li2={'UX Writing이 일관되어야 합니다.'}
                        li3={'서비스 흐름이 일관되어야 합니다.'}
                        li4={'그래픽 디자인 요소과 일관되어야 합니다.'}
                        li5={'로그인 체계가 일관되어야 합니다.'}
                        li6={'타 서비스로 이동할 때 사용 경험이 자연스럽게 이어지도록 디자인 되어야 합니다.'}
                        littleTitle1={"UI 일관성"}
                        bulletPoint1={"같은 기능을 수행하는 컴포넌트의 디자인이 일관되어야 한다. \n 맥락에 따른 버튼 정책의 통일이 필요하다. \n 정보 우선 순위에 따라 우선 배치, 강약 조절 등이 일관되어야 한다."}
                        example1={Coherence_example1}
                        littleTitle2={"UX Writing 일관성"}
                        bulletPoint2={"타이틀 및 안내 문구의 용어가 일관되어야 한다. \n 어투, 종결어미 등이 일관되어야 한다. \n 용어의 난이도가 일관되어야 한다."}
                        example2={Coherence_example2}
                        littleTitle3={"Flow 일관성"}
                        bulletPoint3={"맥락이 같은 정보의 제공 방식의 통일이 필요하다."}
                        littleTitle4={"그래픽 일관성"}
                        bulletPoint4={"일러스트는 브랜드 컨셉에 맞추어 일관되게 작업한다."}
                        littleTitle5={"로그인 체계 일관성"}
                        bulletPoint5={"로그인 방식은 다수가 될 수 있지만 체계는 하나로 통일해야 한다."}
                        example5={Coherence_example5}
                        littleTitle6={"로그인 체계 일관성"}
                        bulletPoint6={"인앱 브라우저, 웹 스크래핑을 통해 타 서비스를 이용해야 하는 경우에도 서비스 경험이 이어지도록 설계하는 것이 필요하다."}
                        example6={Coherence_example6}
                    />
                    <Footer />
                </div>


            </main >
        </div >
    );
}

export default App;
