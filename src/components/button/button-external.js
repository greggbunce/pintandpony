import React from "react"
import "./button.scss"

const ButtonExternal = (props) => {
    return (
        <div className={`button ${[props.type]} ${[props.embedded]}`}>
            <a className="link" href={props.link}>{props.children}</a>
        </div>
    )
}

export default ButtonExternal