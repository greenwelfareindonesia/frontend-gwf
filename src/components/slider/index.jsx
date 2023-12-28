import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Background from "../background";

const Slider = (props) => {
  const timerRef = React.useRef(null);

  const goPrev = () => {
    const isFirstSlide = props.currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : props.currentIndex - 1;
    props.setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = props.currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : props.currentIndex + 1;
    props.setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    props.setCurrentIndex(slideIndex);
  };

  // const slidesContainer = () => ({
  //   maxWidth: `${1200 * props.slides.length}px`,
  //   transform: `translateX(${-(props.currentIndex * 1200)}px)`,
  // });

  React.useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  });

  return (
    <div className={`h-full w-full py-36 px-4 relative group ${props.parentClassName}`}>
      <Background
        src={props.slides[props.currentIndex].src}
        className={`h-full overflow-hidden flex-col gap-8 px-28 duration-500 transition-all ${props.childrenClassName}`}
      >
        {props.children ? props.children : null}
      </Background>
      <div className={`block ${props.arrowClassName}`}>
        <div
          onClick={goPrev}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-light-1 cursor-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={goNext}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-light-1 cursor-pointer"
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      <div className={`flex items-center justify-center gap-1 ${props.dotClassName}`}>
        {props.slides.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-4xl cursor-pointer">
            {slideIndex === props.currentIndex ? <>&#9702;</> : <>&#8226;</>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
