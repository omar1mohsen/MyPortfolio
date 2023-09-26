import React, { useEffect } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

function ScrollTopBtn() {

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, []);
  const scrollFunction = () => {
    const mybutton = document.getElementById("btn-back-to-top") as HTMLElement;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton?.classList.remove("hide");
    } else {
      mybutton?.classList.add("hide");
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={ScrollTop}
      type="button"
      className="scrollBtnTop hide"
      id="btn-back-to-top"
    >
      <BiUpArrowAlt className="icon" />
    </button>
  );
}

export default ScrollTopBtn;
