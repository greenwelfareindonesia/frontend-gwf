import Container from "../../components/container";
import Image from "../../components/image";
import { ongoingPrograms } from "../../constant/ongoingPrograms";

const OngoingPrograms = () => {
  return (
    <Container className="text-center !max-w-screen-xl h-full">
      <h1 className="text-2xl font-light text-primary-2 md:text-4xl">Ongoing Programs</h1>
      <div className="mt-12 space-y-16 text-center">
        {ongoingPrograms.map((item, index) => (
          <div className="space-y-8" key={index}>
            <h2 className="font-bold text-center text-primary-2">{item.title}</h2>
            <p className="text-sm leading-6 text-center text-primary-2">{item.description}</p>
            <div className="flex flex-col items-center justify-center gap-10 mt-12 lg:flex-row">
              {item.image.map((childItem, childIndex) => (
                <Image key={childIndex} src={childItem} description={`image-${item.title}-${childIndex}`} className="!max-w-xs" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OngoingPrograms;
