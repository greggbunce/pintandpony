import React from "react"
import heroStyles from "./hero.module.scss"

const Hero = (props) => {
    return (
        <div className={` ${heroStyles.hero} ${heroStyles[props.class]}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={heroStyles.heroContent}>
                            <h1>{props.title}</h1>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero