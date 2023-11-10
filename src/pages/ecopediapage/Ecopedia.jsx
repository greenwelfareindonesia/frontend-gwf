import Post from "../ecopediapage/Post";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function Ecopedia() {
  return (
    <div className="">
      <Navbar />
      <div className="w-[61rem] flex justify-center items-center flex-wrap gap-8 m-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Footer />
    </div>
  );
}
