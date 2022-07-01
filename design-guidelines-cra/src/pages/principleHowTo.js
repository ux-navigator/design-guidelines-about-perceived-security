import React, { useRef } from "react";
import GuidelineExample from './guidelineExample';
import Coherence_example1 from "../img/coherence_example1.png"


const PrincipleHowTo = (props) => {
    const myRef1 = useRef(null);

    function onContactClick1() {
        myRef1.current.scrollIntoView({ behavior: 'smooth' });
    }

    const myRef2 = useRef(null);

    function onContactClick2() {
        myRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
    const myRef3 = useRef(null);

    function onContactClick3() {
        myRef3.current.scrollIntoView({ behavior: 'smooth' });
    }
    const myRef4 = useRef(null);

    function onContactClick4() {
        myRef4.current.scrollIntoView({ behavior: 'smooth' });
    }
    const myRef5 = useRef(null);

    function onContactClick5() {
        myRef5.current.scrollIntoView({ behavior: 'smooth' });
    }
    const myRef6 = useRef(null);

    function onContactClick6() {
        myRef6.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (props.li6) {
        return (
            <div className='PrincipleHowTo' >
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <div>
                    <ul className='HowToList' >
                        <div onClick={onContactClick1} id="1"><li className='blue_C btn'>{props.li1}</li></div>
                        <div onClick={onContactClick2} id="2"><li className='blue_C btn'>{props.li2}</li></div>
                        <div onClick={onContactClick3} id="3"><li className='blue_C btn'>{props.li3}</li></div>
                        <div onClick={onContactClick4} id="4"><li className='blue_C btn'>{props.li4}</li></div>
                        <div onClick={onContactClick5} id="5"><li className='blue_C btn'>{props.li5}</li></div>
                        <div onClick={onContactClick6} id="1"><li className='blue_C btn'>{props.li6}</li></div>
                    </ul>
                </div>


                <GuidelineExample ref={myRef1} littleTitle={props.littleTitle1} bulletPoint={props.bulletPoint1} img={props.example1} />
                <GuidelineExample ref={myRef2} littleTitle={props.littleTitle2} bulletPoint={props.bulletPoint2} img={props.example2} />
                <GuidelineExample ref={myRef3} littleTitle={props.littleTitle3} bulletPoint={props.bulletPoint3} img={props.example3} />
                <GuidelineExample ref={myRef4} littleTitle={props.littleTitle4} bulletPoint={props.bulletPoint4} img={props.example4} />
                <GuidelineExample ref={myRef5} littleTitle={props.littleTitle5} bulletPoint={props.bulletPoint5} img={props.example5} />
                <GuidelineExample ref={myRef6} littleTitle={props.littleTitle6} bulletPoint={props.bulletPoint6} img={props.example6} />

            </div>
        );
    } else if (props.li5) {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <ul className='HowToList'>
                    <li className='blue_C'>{props.li1}</li>
                    <li className='blue_C'>{props.li2}</li>
                    <li className='blue_C'>{props.li3}</li>
                    <li className='blue_C'>{props.li4}</li>
                    <li className='blue_C'>{props.li5}</li>
                </ul>
            </div>
        );
    } else if (props.li4) {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <ul className='HowToList'>
                    <li className='blue_C'>{props.li1}</li>
                    <li className='blue_C'>{props.li2}</li>
                    <li className='blue_C'>{props.li3}</li>
                    <li className='blue_C'>{props.li4}</li>
                </ul>
            </div>
        );
    } else if (props.li3) {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <ul className='HowToList'>
                    <li className='blue_C'>{props.li1}</li>
                    <li className='blue_C'>{props.li2}</li>
                    <li className='blue_C'>{props.li3}</li>
                </ul>
            </div>
        );
    } else if (props.li2) {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <ul className='HowToList'>
                    <li className='blue_C'>{props.li1}</li>
                    <li className='blue_C'>{props.li2}</li>
                </ul>
            </div>
        );
    }
    else if (props.li1) {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>
                <ul className='HowToList'>
                    <li className='blue_C'>{props.li1}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className='PrincipleHowTo'>
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description}</p>

            </div>
        );
    }
}

export default PrincipleHowTo;