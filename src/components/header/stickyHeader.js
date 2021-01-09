import React from "react"

class StickyHeader extends React.Component {
    componentDidMount() {
      window.addEventListener("scroll", this.toggleBodyClass);
      this.toggleBodyClass();
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.toggleBodyClass);
    }
    toggleBodyClass = () => {
      if (window.scrollY < 170) {
        document.body.classList.remove("stickyHeader");

      } else {
        document.body.classList.add("stickyHeader");
      }
    };
    render() {
      return (null);
    }
  }

  export default StickyHeader