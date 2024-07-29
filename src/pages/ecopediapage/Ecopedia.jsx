import Post from "../ecopediapage/Post";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container";

export default function Ecopedia() {
  return (
    <>
      <Navbar />
      <Container className="sm:!px-0">
        <div className="flex flex-wrap items-center justify-center w-full gap-6 mx-auto">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </Container>
      <Footer />
    </>
  );
}
