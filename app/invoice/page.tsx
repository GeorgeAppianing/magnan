import Sidebar from "@/components/Sidebar";

export default function invoice() {
  return (
    <div className="min-h-screen fixed top-0 left-0 w-full bg-black">
      <Sidebar currentPath="/invoice" />
      <h2 className="ml-55 text-white">Invoice Page</h2>
    </div>
  );
}
