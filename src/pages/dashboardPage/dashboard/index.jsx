import DashboardSection from "../../../layouts/dashboard_section/Template";
import { Link } from "react-router-dom";
import { edit_icon, delete_icon } from "../../../assets/icons";

const dummyData = [
  {
    ID: 1,
    fullName: 'John Doe1',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
  {
    ID: 2,
    fullName: 'John Doe2',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
  {
    ID: 3,
    fullName: 'John Doe3',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
];

const DashboardPage = () => {
  return (
    <DashboardSection titleField="Employees">
      <div className="border-1 border-primary-1 rounded-md">
        <div className="p-5">
          <p>Search dkk bar</p>
        </div>
        <table className="w-full border-t border-primary-2 text-primary-1">
          <thead>
            <tr className="text-left border-b border-primary-2 bg-primary-1 bg-opacity-30">
              <th className="p-4 w-60">Full Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.ID} className="border-b border-primary-2">
                <td className="px-4 py-5">{data.fullName}</td>
                <td className="px-4">{data.department}</td>
                <td className="px-4 text-sm font-bold">{data.status}</td>
                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <Link to={`/dashboard/user/edit/${data.slug}`}>
                      <img src={edit_icon} alt="Edit" />
                    </Link>
                    <button className="p-0 bg-transparent border-none" onClick={() => alert('Delete action triggered')}>
                      <img src={delete_icon} alt="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-primary-1 bg-opacity-30">
              <td className="p-6 w-60"></td>
              <td className="p-6"></td>
              <td className="p-6"></td>
              <td className="p-6"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </DashboardSection>
  );
};

export default DashboardPage;
