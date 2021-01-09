import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import cardClickableStyles from "./cardClickable.module.scss"

const CardClickable = (props) => {
    return (
        <div className={` ${cardClickableStyles.cardClickable} ${cardClickableStyles[props.colour]} ${cardClickableStyles[props.columnWidth]}`}>
            <AniLink paintDrip hex="#DEE2E6" duration={0.8} to={props.link}>
                <div className={cardClickableStyles.content}>
                    <img className="icon" src={props.icon} alt={props.title} />
                    <h2>{props.title}</h2>
                    {props.children}
                </div>
            </AniLink>
        </div>
    )
}

export default CardClickable