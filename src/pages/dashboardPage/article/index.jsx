import { Link } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import Dummy1 from "../../../assets/workshop-image/dummy1.png";
import Dummy2 from "../../../assets/workshop-image/dummy2.png";
import { useGetArticles } from "../../../features/article/service";

const Index = () => {

  const { data } = useGetArticles();
  
  return (
    <Sidebar titleField={"Article"}>
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/article/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Article</button>
        </Link>
      </div>
      <table className="w-full text-left table-fixed text-primary-2">
        <thead>
          <tr className="border-b-1 border-t-1 border-primary-2">
            {/*<th className="pt-3.5 pb-3.5 w-48">Foto</th> */}
            <th className="pt-3.5 pb-3.5 w-40">Nama</th>
            <th className="pt-3.5 pb-3.5 w-40">Email</th>
            <th className="pt-3.5 pb-3.5 w-44">Topik</th>
            <th className="pt-3.5 pb-3.5 w-44">Pesan Artikel</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((article) => (
            <tr key={article?.ID} className="border-b-1 border-primary-2">
              {/* <td className="pt-5 pb-5 w-[217px] h-[111px]">
                <div className="container w-[217px] h-[111px] overflow-hidden">
                  <img src={elemens.foto} alt="Gambar Workshop" className="object-cover w-full h-full" />
                </div>
              </td> */}
              <td className="pt-3.5 pb-3.5">
                <div className="container w-64 overflow-hidden">
                  <p className="text-sm align-text-top ">{article?.FullName}</p>
                </div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm">{article?.Email}</div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm">{article?.Topic}</div>
              </td>
              <td className="pt-3.5 pb-3.5">
                <div className="text-sm">{article?.ArticleMessage}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
};

export default Index;
