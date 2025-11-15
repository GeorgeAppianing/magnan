import Sidebar from "@/components/Sidebar";

export default function invoice() {
  return (
    <div className="min-h-screen fixed top-0 left-0 w-full bg-black">
      <Sidebar currentPath="/invoice" />
      <div className="ml-65 p-4">
        <h2 className="text-2xl font-semibold text-white">Invoice Page</h2>
      </div>
    </div>
  );
}
