import React from "react";
import DashboardSection from "./Template";
import Button from "../../components/button";
import { HiEye } from "react-icons/hi2";

function UserDashboard() {
  const headItem = ["Name", "Email", "Role", "Action"];
  return (
    <DashboardSection titleField="Users">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-primary-2">
          <thead className="uppercase border-y border-y-dark bg-light-2">
            {headItem.map((item, index) => (
              <th key={index} scope="col" className="px-8 py-4">
                {item}
              </th>
            ))}
          </thead>
          <tbody>
            <tr className="bg-white border-b border-b-dark text-primary-2">
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                Jifan Izza Sumendra
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                jifanizza18@gmail.com
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">User</td>
              <td className="flex px-10 py-4">
                <Button className="text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded">
                  <HiEye className="w-5 h-5" color="white" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardSection>
  );
}

export default UserDashboard;
