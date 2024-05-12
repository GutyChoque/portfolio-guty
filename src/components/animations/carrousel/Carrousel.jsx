import PropTypes from "prop-types";
import { useEffect } from "react";
import "./carrousel.css";

function Carrousel({ children }) {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    addAnimation();

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-speed="fast">
      <ul className="tag-list scroller__inner">
        {/* {children.map((child, index) => (
          <li key={index}>{child}</li>

        ))} */}
        {children}
      </ul>
    </div>
  );
}

Carrousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carrousel;

// Credits to Kevin Powell, CSS content creator.
// https://www.youtube.com/@KevinPowell
