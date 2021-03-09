import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./button.scss"

const Button = (props) => {
    return (
        <div className={`button ${[props.type]} ${[props.embedded]}`}>
            <AniLink className="link" to={props.link} paintDrip hex="#DEE2E6" duration={0.8}>{props.children}</AniLink>
        </div>
    )
}

export default Button