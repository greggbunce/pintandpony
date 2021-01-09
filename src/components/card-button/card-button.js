import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import cardButtonStyles from "./cardButton.module.scss"

const CardButton = (props) => {
    return (
        <div className={` ${cardButtonStyles.cardButton} ${cardButtonStyles[props.colour]} ${cardButtonStyles[props.columnWidth]}`}>
            <div className={cardButtonStyles.content}>
                <img className="icon" src={props.icon} alt={props.title} />
                <h2>{props.title}</h2>
                {props.children}
                <AniLink paintDrip hex="#DEE2E6" duration={0.8} className={cardButtonStyles.button} to={props.buttonLink}>{props.buttonText}</AniLink>
            </div>
        </div>
    )
}

export default CardButton