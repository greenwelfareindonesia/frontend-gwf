/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import arrowLeft from "../assets/VectorLeft.svg";
import arrowRight from "../assets/VectorRight.svg";

export default function ImageSlider(props) {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slidesContainer = () => ({
    width: props.parentWidth * props.slides.length,
    transform: `translateX(${-(currentIndex * props.parentWidth)}px)`,
  });
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goNext();
    }, 4000);
    return () => clearTimeout(timerRef.current);
  });

  return (
    <div className="h-full relative">
      <div
        className="absolute top-1/2 left-16 transform -translate-y-1/2 text-4xl z-10 cursor-pointer"
        onClick={goPrev}
      >
        <img src={arrowLeft} alt="Arrow Left" />
      </div>
      <div
        className="absolute top-1/2 right-16 transform -translate-y-1/2 text-4xl z-10 cursor-pointer"
        onClick={goNext}
      >
        <img src={arrowRight} alt="Arrow Right" />
      </div>
      <div className="overflow-hidden">
        <div
          className="flex h-full transition transform ease-out duration-500"
          style={slidesContainer()}
        >
          {props.slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="text-center text-[#3E3E08] w-full font-bold font-inter italic text-lg mb-6"
            >
              {props.slides[slideIndex].title}
            </div>
          ))}
        </div>
        <div
          className="flex h-full transition transform ease-out duration-500"
          style={slidesContainer()}
        >
          {props.slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="text-center text-[#3E3E08] font-inter text-sm w-[400px] lg:w-[58rem] h-[8.4rem] mx-auto leading-7 mb-10"
            >
              {props.slides[slideIndex].desc}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {props.slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="cursor-pointer text-3xl mx-1 my-1"
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? <>&#9702;</> : <>&#8226;</>}
          </div>
        ))}
      </div>
    </div>
  );
}
