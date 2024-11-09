"use client";

import { getServiceTypesAction } from '@/actions/service';
import CustomLoading from '@/app/components/customLoading';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import ModalServiceTypeAdd from './components/modalservicetype';
import AddButton from './components/addButton';

const ServiceTypes = () => {
  const [serviceTypes, setServiceTypes] = useState([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expandedUrls, setExpandedUrls] = useState({});
  const methods = useForm();
  
  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const data = await getServiceTypesAction();
        setServiceTypes(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchServiceTypes();
  }, []);

  const toggleUrl = (id) => {
    setExpandedUrls((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
    setIsModalAddOpen(true);
  }

  const handleAddClose = () => {
    setIsModalAddOpen(false);
  }

  if (loading) return <CustomLoading />;

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold">Tipos de servicio</h1>
          <AddButton onClick={handleAddClick} component='tipo de servicio' />
        </div>
        <hr className="w-full border-t mb-8 mt-4" />
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Imagen URL</th>
            </tr>
          </thead>
          <tbody>
            {serviceTypes.map((type) => (
              <tr key={type.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
                <td className="px-4 py-2">{type.id}</td>
                <td className="px-4 py-2">{type.name}</td>
                <td className="px-4 py-2">{type.description}</td>
                <td className="px-4 py-2">
                  {expandedUrls[type.id] ? type.s3Url : `${type.s3Url.slice(0, 20)}...`}
                  <button
                    onClick={() => toggleUrl(type.id)}
                    className="text-blue-500 ml-2"
                  >
                    {expandedUrls[type.id] ? 'Ver menos' : 'Ver más'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
      <ModalServiceTypeAdd isOpen={isModalAddOpen} onClose={handleAddClose}  />
    </FormProvider>
  );
};

export default ServiceTypes;
