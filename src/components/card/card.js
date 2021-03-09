import React from "react"
import cardStyles from "./card.module.scss"

const CardComponent = (props) => {
    return (
        <div className={` ${cardStyles.card} ${cardStyles[props.colour]} ${cardStyles[props.columnWidth]}`}>
            <div className={cardStyles.content}>
                <img className="icon" src={props.icon} alt={props.title} />
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default CardComponent