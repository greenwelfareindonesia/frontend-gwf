import DashboardSection from "./Template";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Button from "../../components/button";

const EventsDashboard = ({ events }) => {
  const headItem = ["Product Name", "Color", "Category", "Price", "Action"];
  return (
    <DashboardSection titleField="Events" buttonField="Post Events">
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
              <td className="px-8 py-4 font-medium whitespace-nowrap">Apple MacBook Pro 17</td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">Silver</td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">Laptop</td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">$2999</td>
              <td className="flex gap-4 px-8 py-4">
                <Button className="text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded">
                  <HiPencil className="w-5 h-5" />
                </Button>
                <Button className="text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded">
                  <HiTrash className="w-5 h-5" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardSection>
  );
};

export default EventsDashboard;
