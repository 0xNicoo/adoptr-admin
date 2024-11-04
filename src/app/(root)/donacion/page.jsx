"use client"

import { getDonationsAction } from '@/actions/donation';
import CustomLoading from '@/app/components/customLoading';
import { useEffect, useState } from 'react';

const Donaciones = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await getDonationsAction();
        setDonations(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDonations();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
  };

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Donaciones</h1>
      <hr className="w-full border-t mb-8" />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Monto (ARS)</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Método de pago</th>
            <th className="px-4 py-2">Fecha de aprobación</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((payment) => (
            <tr key={payment.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
              <td className="px-4 py-2">{payment.id}</td>
              <td className="px-4 py-2">${payment.amount}</td>
              <td className={`px-4 py-2 ${payment.description === "Descripción no disponible" ? 'text-red-500' : ''}`}>
                {payment.description}
              </td>
              <td className="px-4 py-2">{payment.status}</td>
              <td className="px-4 py-2">{payment.paymentMethod}</td>
              <td className="px-4 py-2">{formatDate(payment.approvalDate)}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donaciones;
