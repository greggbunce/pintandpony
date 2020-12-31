import React from "react"

class Test extends React.Component {
    componentDidMount() {
      window.addEventListener("scroll", this.toggleBodyClass);
      this.toggleBodyClass();
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.toggleBodyClass);
    }
  
    toggleBodyClass = () => {
      if (window.scrollY < 100) {
        document.body.classList.remove("showChildDiv");

      } else {
        document.body.classList.add("showChildDiv");
      }
    };
  
    render() {
      return (
        <div className="addClassOnScroll" />
      );
    }
  }

  export default Test