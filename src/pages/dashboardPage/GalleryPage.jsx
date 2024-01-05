import * as React from "react";

import { useForm } from "react-hook-form";
import { useAddGallery, useDeleteGallery, useEditGallery, useGetGalleries, useGetGalleryById } from "../../features/gallery/service";

import Popup from "reactjs-popup";
import Slider from "react-slick";

import { HiPencil, HiTrash } from "react-icons/hi2";

import Button from "../../components/button";
import Input from "../../components/input";
import Image from "../../components/image";
import DashboardSection from "../../layouts/dashboard_section/Template";

const GalleryPage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: galleryId, refetch } = useGetGalleryById(slugId);

  const { data: galleries } = useGetGalleries();

  const { mutate: addMutate } = useAddGallery();

  const { mutate: deleteMutate } = useDeleteGallery();

  const { mutate: editMutate } = useEditGallery();

  const onSubmitAddGallery = (data) => {
    const { addAlt: Alt, addSlug: Slug, addFileNames: FileNames } = data;
    const body = { Alt, Slug, FileNames };
    addMutate(body);
  };

  const onSubmitEditGallery = (data) => {
    const { editAlt: Alt, editSlug: Slug, editFileNames: FileNames } = data;
    const body = { Alt, Slug, FileNames };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(galleryId);
  }, [galleryId, reset]);

  const openEditModal = (slug) => {
    setEditOpen(!isEditOpen);
    setSlugId(slug);
    refetch();
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const closeEditModal = () => {
    setSlugId(null);
  };

  const headItem = ["Title Alt", "Slug", "Image", "Action"];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <DashboardSection titleField="Galleries" buttonField="Post Gallery" handlePopUp={openAddModal}>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-primary-2">
          <thead className="uppercase border-y border-y-dark bg-light-2">
            <tr>
              {headItem.map((item, index) => (
                <th key={index} scope="col" className="p-4">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {galleries?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium w-80">{item.Alt}</td>
                <td className="p-4 font-medium w-80">{item.Slug}</td>
                <td className="p-4 font-medium">
                  <Slider {...settings} className="w-32 h-32">
                    {item?.FileNames?.map((child, childIndex) => (
                      <Image key={childIndex} src={child} className="!w-32 !h-32" description={`gallery-${childIndex}`} />
                    ))}
                  </Slider>
                </td>
                <td className="flex gap-4 p-4">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      openEditModal(item.Slug);
                    }}
                    className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded"
                  >
                    <HiPencil className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(item.Slug);
                    }}
                    className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded"
                  >
                    <HiTrash className="w-5 h-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* post something */}
        <Popup open={isAddOpen} onClose={openAddModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Gallery</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitAddGallery)} className="w-full p-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
              <Input required register={register} name="addAlt" title="Title Alt" placeholder="input your title for alt" type="text" />
              <Input required register={register} name="addFileNames" title="Image" placeholder="input your image" type="file" />
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}
        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Gallery</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitEditGallery)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input
                required
                register={register}
                defaultValue={galleryId?.Slug}
                name="editSlug"
                title="Slug"
                placeholder="input your slug"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={galleryId?.Alt}
                name="editAlt"
                title="Title Alt"
                placeholder="input your subtitle"
                type="text"
              />
              <Input required register={register} name="editFileNames" title="Image" placeholder="input your image" type="file" />
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>
      </div>
    </DashboardSection>
  );
};

export default GalleryPage;
