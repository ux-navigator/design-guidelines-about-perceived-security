const PrincipleTitle = (props) => {
    return (
        <div className='PrincipleTitle'>
            <div className="PrincipleTitle_Wrap">
                <h2 className='title_3'>{props.title}</h2>
                <p className='body_2 gray_1 PrincipleTitle_de'>{props.description}</p>
            </div>

            <img className="principle_simbol" src={props.img} />

        </div>

    );
}
export default PrincipleTitle;