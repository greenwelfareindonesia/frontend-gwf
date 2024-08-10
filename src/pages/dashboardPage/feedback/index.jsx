import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useGetFeedbacks } from "../../../features/feedback/service";

const FeedbackDashboard = () => {
  const { data } = useGetFeedbacks();

  return (
    <DashboardSection titleField="Feedback">
      <table className="w-full border-t border-primary-2">
        <thead>
          <tr className="border-b-1 border-primary-2">
            <th className="p-4 text-xs text-left w-80 text-primary-1">Email</th>
            <th className="p-4 text-xs text-left text-primary-1">Message</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((article) => (
            <tr key={article.ID} className="border-b-1 border-primary-2">
              <td className="px-4">
                <p className="py-2 text-sm text-primary-1">{article.Email}</p>
              </td>
              <td className="px-4">
                <p className="py-2 text-sm text-primary-1">{article.Text}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardSection>
  );
};

export default FeedbackDashboard;
