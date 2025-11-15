import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black fixed top-0 left-0 w-full ">
      <Sidebar />
      <div>
        {/* Main Area */}
        <main className="ml-55 p-4">
          <div>
            <h2 className="text-2xl mb-8 text-white mt-5">Dashboard</h2>
          </div>
          {/* grid */}
          <div className="grid gird-cols-1 lg:grid-cols-4 w-full gap-4 ">
            <div className="bg-[#141414] rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-white font-semibold">Clients</h2>
                <span className="text-sm font-semibold text-green-800 bg-white p-2 rounded-full">
                  100
                </span>
              </div>

              <p className="text-sm text-white">Male</p>
              <p className="text-sm text-white">Female</p>
            </div>
            <div className="bg-[#141414] rounded-lg p-2">q</div>
            <div className="bg-[#141414] rounded-lg p-2">q</div>
            <div className="bg-[#141414] rounded-lg p-2">q</div>
          </div>
          {/* Table */}
          <div className="grid grid-cols-2 mt-20 gap-4 ">
            <div className="span-2 bg-[#141414] p-4 rounded-lg ">1</div>
            <div className="span-2 bg-[#141414] p-4 rounded-lg w-50">2</div>
          </div>
        </main>
      </div>
    </div>
  );
}
