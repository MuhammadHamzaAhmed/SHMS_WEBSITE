import '../css/dsCard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
    return (
        <CompactCard param={props} set/>
    )
}

function CompactCard({param}){
    return(
        <div className="CompactCard" style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow
        }}>
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={param.value}
                />
                <span></span>
            </div>
            <div className="detail">
                {param.barText}
                <span>{param.title}</span>
                <span>{param.png}</span>
            </div>
        </div>
    )
}

export default Card;