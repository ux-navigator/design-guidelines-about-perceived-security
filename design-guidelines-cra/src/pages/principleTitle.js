import Simbol from "../img/simbol_coherence.png"

const PrincipleTitle = (pros) => {
    return (
        <div className='PrincipleTitle'>
            <div className="PrincipleTitle_Wrap">
                <h2 className='title_3'>{pros.title}</h2>
                <p className='body_2 gray_1 PrincipleTitle_de'>{pros.description}</p>
            </div>
            <div>
                <img className="principle_simbol" src={Simbol} />
            </div>
        </div>

    );
}
export default PrincipleTitle;