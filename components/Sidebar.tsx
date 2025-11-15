import Link from "next/link";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath?: string;
}) {
  const currentNavigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Clients", href: "/clients" },
    { name: "Utility", href: "/utility" },
    { name: "Invoice", href: "/invoice" },
  ];
  return (
    <div className="min-h-screen fixed w-55 top-0 left-0 z-51 bg-[#141414] p-4">
      <div className="flex mb-8 ">
        {/* logo */}
        {/* <h1 className="text-4xl text-white">Magnan</h1> */}
      </div>
      <nav>
        {currentNavigation.map((item) => {
          const isActive = currentPath == item.href;
          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-semibold flex items-center px-2 py-4  ${
                  isActive
                    ? "bg-white text-black rounded-lg "
                    : "text-gray-400 hover:text-gray-700 font-medium "
                }`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
