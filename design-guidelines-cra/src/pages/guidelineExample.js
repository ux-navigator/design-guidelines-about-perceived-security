import React, { forwardRef } from "react";

const GuidelineExample = forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <h2 className="title_6 pt_120">{props.littleTitle}</h2>
            <ul className='HowToList2 mb_40'>
                <div>{props.bulletPoint.split("\n").map((txt) => (
                    <>
                        <li className='body_2 gray_1'>{txt}
                        </li>
                    </>
                ))} </div>
            </ul>

            <img className="width_1002" src={props.img} />
        </div>
    )

});

export default GuidelineExample;