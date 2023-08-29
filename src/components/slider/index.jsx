import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "../container/Image";
const Slider = (props) => {
  const timerRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

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

  // const slidesContainer = () => ({
  //   maxWidth: `${1200 * props.slides.length}px`,
  //   transform: `translateX(${-(currentIndex * 1200)}px)`,
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
    <div className={`h-full w-full py-32 px-4 relative group ${props.parentClassName}`}>
      <Image src={props.slides[currentIndex].src} className={`h-full overflow-hidden flex-col gap-8 px-28 duration-500 transition-all`}>
        <h1 className="text-center text-[#3E3E08] w-full font-bold italic text-lg">{props.slides[currentIndex].title}</h1>
        <p className="text-center text-[#3E3E08] w-full font-light italic text-sm leading-8">{props.slides[currentIndex].desc}</p>
      </Image>
      <div className={`block ${props.arrowClassName}`}>
        <div
          onClick={goPrev}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={goNext}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/10 text-white cursor-pointer"
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      <div className={`flex items-center justify-center gap-1 ${props.dotClassName}`}>
        {props.slides.map((_, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            {slideIndex === currentIndex ? <>&#9702;</> : <>&#8226;</>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
