import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    setIsActive(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setIsVisible(scrollTop > 100);

    if (scrollTop === 0) {
      setIsActive(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-up-button ${isVisible ? "d-block" : "d-none"} `}>
      <div
        style={{ backgroundColor: isActive ? "#8064A2" : "white" }}
      >
        <GoChevronDown
          onClick={scrollToTop}
          size={32}
          className="rotate-180 pointer"
          style={{ color: isActive ? "white" : "black" }}
        />
      </div>
    </div>
  );
}

export default ScrollUpButton;