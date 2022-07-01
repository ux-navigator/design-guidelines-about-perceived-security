const PrincipleWhy = (props) => {
    return (
        <>

            < div className='PrincipleWhy' >
                <h2 className='title_4 mb_20'>{props.title}</h2>
                <p className='body_2 gray_1'>{props.description.split("\n").map((txt) => (
                    <>
                        {txt}
                        <br />
                    </>
                ))} </p>
            </div >
        </>
    );
}

export default PrincipleWhy;