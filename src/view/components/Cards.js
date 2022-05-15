import React from "react";
import '../css/dsCards.css'

import Card from "./Card";

function Cards(param){
    return (
        <div className="Cards">
            {param.CardData.map((card, id)=>{
                return(
                    <div className="parentContainer">
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
    )
}

export default Cards;