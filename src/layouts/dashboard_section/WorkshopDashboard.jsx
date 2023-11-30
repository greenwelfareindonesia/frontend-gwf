import DashboardSection from "./Template";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Button from "../../components/button";
import SampleImage from "../../assets/image_contact.png";

const WorkshopDashboard = () => {
  const headItem = [
    "Image",
    "Title and Description",
    "Post Date",
    "Workshop Date",
    "Registration Link",
    "Action",
  ];
  return (
    <DashboardSection titleField="Workshop" buttonField="Post Workshop">
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
                <img
                  src={SampleImage}
                  alt="sample image"
                  className="max-w-5xl max-h-10"
                />
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                GYT #3: Gerakan Menuju Sekolah
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                20 November 2023
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                01 Desember 2023 - 03 Desember 2023
              </td>
              <td className="px-8 py-4 font-medium whitespace-nowrap">
                bit.ly/registration
              </td>
              <td className="flex gap-4 px-8 py-4">
                <Button className="text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded">
                  <HiPencil className="w-5 h-5" color="white" />
                </Button>
                <Button className="text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded">
                  <HiTrash className="w-5 h-5" color="white" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardSection>
  );
};

export default WorkshopDashboard;
