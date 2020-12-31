import React from "react";

const Toggle = (props) => {
  const [show, setShow] = React.useState();
  return (
    <div className="toggle">
      <button className="toggle" onClick={() => setShow(!show)}>
        {props.buttonText}
      </button>
      {/*
      <button className="add" onClick={() => setShow(true)}>
        Add
      </button>
      <button className="remove" onClick={() => setShow(false)}>
        Remove
      </button>
      */}
      <div className={`content ${show ? props.classNameToToggle : ""}`}>
        {props.children}
      </div>
    </div>
  )
}
export default Toggle

{/*
<Toggle buttonText="click me" classNameToToggle="open">
  <h1>This text gets toggled by a class being added/removed</h1>
</Toggle>
*/}