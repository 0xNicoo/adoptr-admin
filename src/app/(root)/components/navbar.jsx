'use client'
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";


const Navbar = () => {

  const router = useRouter()

  const handleLogout = () => {
    router.push('/');
  }

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-2xl font-bold">
        Adoptr - ADMIN
      </div>
      <div className="flex"> 
        <div className="flex items-center space-x-6 pr-8">
            <a href="/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
            <a href="/reportes/publicaciones" className="text-white hover:text-gray-300">Publicaciones</a>
            <a href="/reportes/perfiles" className="text-white hover:text-gray-300">Perfiles</a>
            <a href="/reportes/posts" className="text-white hover:text-gray-300">Posts</a>
        </div>
        <div className="flex items-center pr-4">
          <button onClick={handleLogout} className="flex bg-red-500 py-1 px-1 rounded items-center text-white hover:text-gray-300">
            <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
