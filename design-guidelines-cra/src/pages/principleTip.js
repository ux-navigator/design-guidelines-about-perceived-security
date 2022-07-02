const PrincipleTip = (props) => {
    return (
        <div className='PrincipleTip'>

            <h2 className='title_4 mb_20'>{props.title}</h2>
            <ul className='HowToList2 mb_40'>
                <div>{props.bulletPoint.split("\n").map((txt) => (
                    <>
                        <li className='body_2 gray_1'>{txt}
                        </li>
                    </>
                ))} </div>
            </ul>

        </div>



    );
}
export default PrincipleTip;