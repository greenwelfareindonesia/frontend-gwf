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
    <div className="relative h-full">
      <div className="absolute z-10 text-4xl transform -translate-y-1/2 cursor-pointer top-1/2 left-16" onClick={goPrev}>
        <img src={arrowLeft} alt="Arrow Left" />
      </div>
      <div className="absolute z-10 text-4xl transform -translate-y-1/2 cursor-pointer top-1/2 right-16" onClick={goNext}>
        <img src={arrowRight} alt="Arrow Right" />
      </div>
      <div className="overflow-hidden">
        <div className="flex h-full transition duration-500 ease-out transform" style={slidesContainer()}>
          {props.slides.map((_, slideIndex) => (
            <div key={slideIndex} className="text-center text-[#3E3E08] w-full font-bold font-inter italic text-lg mb-6">
              {props.slides[slideIndex].title}
            </div>
          ))}
        </div>
        <div className="flex h-full transition duration-500 ease-out transform" style={slidesContainer()}>
          {props.slides.map((_, slideIndex) => (
            <div key={slideIndex} className="text-center text-[#3E3E08] font-inter text-sm w-[400px] lg:w-[58rem] h-[8.4rem] mx-auto leading-7 mb-10">
              {props.slides[slideIndex].desc}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {props.slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="mx-1 my-1 text-3xl cursor-pointer" onClick={() => goToSlide(slideIndex)}>
            {slideIndex === currentIndex ? <>&#9702;</> : <>&#8226;</>}
          </div>
        ))}
      </div>
    </div>
  );
}
