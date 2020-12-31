import React from "react"
import { Link } from "gatsby"
import cardClickableStyles from "./cardClickable.module.scss"

const CardClickable = (props) => {
    return (
        <div className={` ${cardClickableStyles.cardClickable} ${cardClickableStyles[props.colour]}`}>
            <Link to={props.link}>
                <div className={cardClickableStyles.content}>
                    <img className="icon" src={props.icon} alt={props.title} />
                    <h2>{props.title}</h2>
                    {props.children}
                </div>
            </Link>
        </div>
    )
}

export default CardClickable