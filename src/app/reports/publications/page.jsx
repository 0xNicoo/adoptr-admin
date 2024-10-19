import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Publications() {
  const reportedPosts = [
    { id: 54, title: "Nombre de la publicación", user: "usuario", date: "Fecha publicación", reports: 8 },
    { id: 56, title: "Nombre de la publicación", user: "usuario", date: "Fecha publicación", reports: 2 },
    { id: 70, title: "Nombre de la publicación", user: "usuario", date: "Fecha publicación", reports: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Publicaciones reportadas</h1>
      <hr className="w-2/3 border-t mb-8" />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2">Fecha creación</th>
            <th className="px-4 py-2">Reportes</th>
          </tr>
        </thead>
        <tbody>
          {reportedPosts.map((post) => (
            <tr key={post.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
              <td className="px-4 py-2">{post.id}</td>
              <td className="px-4 py-2">{post.title}</td>
              <td className="px-4 py-2">{post.user}</td>
              <td className="px-4 py-2">{post.date}</td>
              <td className="px-4 py-2 flex justify-between items-center">
                <span>{post.reports}</span>
                <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black ml-2 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
