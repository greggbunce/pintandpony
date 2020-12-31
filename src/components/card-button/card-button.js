import React from "react"
import { Link } from "gatsby"
import cardButtonStyles from "./cardButton.module.scss"

const CardButton = (props) => {
    return (
        <div className={` ${cardButtonStyles.cardButton} ${cardButtonStyles[props.colour]}`}>
            <div className={cardButtonStyles.content}>
                <img className="icon" src={props.icon} alt={props.title} />
                <h2>{props.title}</h2>
                {props.children}
                <Link className={cardButtonStyles.button} to={props.buttonLink}>{props.buttonText}</Link>
            </div>
        </div>
    )
}

export default CardButton