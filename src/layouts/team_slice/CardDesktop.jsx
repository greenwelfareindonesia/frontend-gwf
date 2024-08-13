import Filter from "../../components/filter";

const CardDesktop = ({ onMouseLeave, onMouseEnter, isHighlight, name, job, pathImg, isBOD }) => {
  const width = isBOD ? `${isHighlight ? "w-64" : "w-28"}` : `${isHighlight ? "w-80" : "w-40"}`;

  return (
    <div
      className={`relative h-80 xl:h-96 group rounded-3xl flex items-end overflow-hidden duration-500 ${width} ${isBOD ? "pb-14" : "pb-20"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Filter intent="card-team" className="z-1" />
      <img loading="lazy" sizes="100vw" src={pathImg} alt={name} className={`absolute top-0 left-0 object-cover object-center w-full h-full -z-1}`} />

      <div
        className={`text-light-1 z-5 text-xl w-full flex flex-col items-center  font-semibold ${
          isHighlight ? "rotate-0 text-center" : "bottom-16 -rotate-90"
        } duration-500`}
      >
        <p className="w-full whitespace-nowrap">{name}</p>
        <p className={`text-sm font-normal transition-all duration-500 whitespace-nowrap group-hover:block ${isHighlight ? "block" : "hidden"}`}>
          {job}
        </p>
      </div>
    </div>
  );
};

export default CardDesktop;
