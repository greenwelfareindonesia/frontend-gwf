import Post from "../ecopediapage/Post";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container";
import { useGetEcopedia } from "../../features/ecopedia/service";

const Ecopedia = () => {
  const { data } = useGetEcopedia();
  return (
    <>
      <Navbar />
      <Container className="sm:!px-0 my-32">
        <div className="flex flex-wrap items-center justify-center w-full gap-6 mx-auto">
          {data?.map((item, index) => (
            <Post key={index} title={item.title} reference={item.reference} createdAt={item.createdAt} fileNames={item.fileNames} slug={item.slug} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Ecopedia;
