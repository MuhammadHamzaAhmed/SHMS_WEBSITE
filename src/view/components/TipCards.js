import '../css/dsCards.css'
import Card from "./Card";

function Cards(param){
    return (
        <div>
            <h2 style={{padding:'1rem'}}>{param.detail}</h2>
            <div className="Cards">

                {param.data.map((card, id)=>{
                    return(
                        <div className="parentContainer" key={id}>
                            <Card
                                title={card.title}
                                color={card.cardColor}
                                barValue={card.barValue}
                                barText={card.barText}
                                value={card.value}
                                png={card.png}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;