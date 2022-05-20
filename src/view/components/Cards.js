import React, {useState} from "react";
import '../css/dsCards.css'
import Card from "./Card";
import {healthMonitoringCard} from "../../Model/Database";
import {Card_Data} from "./Data";

function Cards(param){
    const [row, setRow] = useState({
        temp:"--/--",
        bp:"--/--",
        hr:"--/--",
        sg:"--/--",
    })

    const CardData = Card_Data(row)

    healthMonitoringCard(param.email, setRow)


    return (
        <div className="Cards">
            {CardData.map((card, id)=>{
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
    )
}

export default Cards;