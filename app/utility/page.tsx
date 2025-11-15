import Sidebar from "@/components/Sidebar";

export default function Utility() {
  return (
    <div className="min-h-screen bg-black fixed top-0 left-0 w-full">
      <Sidebar currentPath="/utility" />
      <div className="ml-65 p-4">
        <h2 className="text-white text-2xl font-semibold">Utility page</h2>
      </div>
    </div>
  );
}
