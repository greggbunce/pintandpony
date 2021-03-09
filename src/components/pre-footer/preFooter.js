import React from "react"
import PreFooterStyles from "./preFooter.module.scss"

const PreFooter = (props) => {
    return (
        <div className={PreFooterStyles.preFooter}>
            {props.children}
        </div>
    )
}

export default PreFooter