export default function Dashboard() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Adoptr dashboard</h1>
        
        <hr className="w-2/3 border-t mb-8" />
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Publicaciones reportadas</span>
            <span className="text-red-600 text-4xl font-bold">4</span>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Perfiles reportados</span>
            <span className="text-red-600 text-4xl font-bold">2</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Post reportados</span>
            <span className="text-red-600 text-4xl font-bold">10</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Publicaciones de adopcion reportadas</span>
            <span className="text-red-600 text-4xl font-bold">2</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Publicaciones de perdidas reportadas</span>
            <span className="text-red-600 text-4xl font-bold">1</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
            <span className="text-lg">Publicaciones de servicios reportadas</span>
            <span className="text-red-600 text-4xl font-bold">1</span>
          </div>
        </div>
      </div>
    );
  }
  