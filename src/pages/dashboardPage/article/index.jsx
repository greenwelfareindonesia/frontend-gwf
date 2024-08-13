import { Link } from "react-router-dom";

import Sidebar from "../../../layouts/dashboard_section/Template";

import { useGetArticles } from "../../../features/article/service";

const ArticleDashboard = () => {
  const { data } = useGetArticles();

  return (
    <Sidebar titleField={"Article"}>
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/article/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Article</button>
        </Link>
      </div>
      <table className="w-full text-left table-fixed text-primary-1">
        <thead>
          <tr className="border-t border-b border-primary-2">
            <th className="w-40 py-4">Name</th>
            <th className="w-40 py-4">Email</th>
            <th className="py-4 w-44">Topic</th>
            <th className="py-4 w-44">Article Message</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((article) => (
            <tr key={article?.ID} className="border-b border-primary-2">
              <td className="py-4">
                <div className="container w-64 overflow-hidden">
                  <p className="text-sm align-text-top ">{article?.FullName}</p>
                </div>
              </td>
              <td className="py-4">
                <div className="text-sm">{article?.Email}</div>
              </td>
              <td className="py-4">
                <div className="text-sm">{article?.Topic}</div>
              </td>
              <td className="py-4">
                <div className="text-sm">{article?.ArticleMessage}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
};

export default ArticleDashboard;
