import { useEffect } from "react";
import "./carrousel.css";

function Carrousel() {
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
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>SSG</li>
        <li>webdev</li>
        <li>animation</li>
        <li>UI/UX</li>
      </ul>
    </div>
  );
}

export default Carrousel;

// Credits to Kevin Powell, CSS content creator.
// https://www.youtube.com/@KevinPowell
