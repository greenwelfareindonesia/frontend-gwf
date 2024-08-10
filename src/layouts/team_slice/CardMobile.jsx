import Slider from "react-slick";

const CardMobile = ({ cards, title, className }) => {
  const getSliderSettings = () => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "2px",
    swipeToSlide: true,
    adaptiveHeight: true,
  });

  return (
    <section className={`py-8 ${className}`}>
      <h1 className="mb-4 text-2xl font-bold text-center">{title}</h1>
      <Slider {...getSliderSettings()}>
        {cards.map((member, index) => {
          const { nama, img, peran } = member;
          return (
            <div key={index} className="">
              <div className="w-40 h-40 mx-auto">
                <img className="object-cover w-full h-full rounded-b-2xl rounded-tr-2xl" src={img} alt={nama} />
                <p className="pt-3 font-semibold text-center">{nama}</p>
                <p className="text-center">{peran}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default CardMobile;
