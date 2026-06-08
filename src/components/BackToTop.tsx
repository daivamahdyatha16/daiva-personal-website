import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-6
            right-6
            z-50

            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-full

            bg-[#8B6B3D]
            text-white

            shadow-lg

            transition-all
            duration-300

            hover:bg-[#6f542e]
            hover:-translate-y-1
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;