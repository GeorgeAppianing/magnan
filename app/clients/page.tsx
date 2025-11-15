"use client";

import Sidebar from "@/components/Sidebar";
import { supabaseClient } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function clients() {
  //   const clientsData = [
  //     {
  //       name: "John Doe",
  //       phone: "+233 24 567 8901",
  //       email: "john.doe@example.com",
  //       company: "Revelo Ghana Ltd",
  //     },
  //     {
  //       name: "Abigail Twumasi",
  //       phone: "+233 20 876 5432",
  //       email: "abigail.twumasi@example.com",
  //       company: "Magnan Consulting",
  //     },
  //     {
  //       name: "Michael Owusu",
  //       phone: "+233 55 444 3322",
  //       email: "michael.owusu@example.com",
  //       company: "OmniBSIC Bank",
  //     },
  //     {
  //       name: "Sarah Boateng",
  //       phone: "+233 26 998 1122",
  //       email: "sarah.boateng@example.com",
  //       company: "TechHub Africa",
  //     },
  //     {
  //       name: "Kwame Appiah",
  //       phone: "+233 50 123 4567",
  //       email: "kwame.appiah@example.com",
  //       company: "Appiah Ventures",
  //     },
  //   ];

  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      const { data, error } = await supabaseClient
        .from("clients")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else setClients(data);
    }
    fetchClients();
  }, []);

  return (
    <div className="min-h-screen bg-black fixed top-0 left-0 w-full ">
      <Sidebar currentPath="/clients" />
      <main className="min-h-screen ml-55 mt-5 text-2xl p-4">
        <h1 className="mb-8 tex-white">Clients Page</h1>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="Search Client"
            className="border border-white w-full rounded-lg px-2 text-sm py-1 bg-[#141414] text-white"
          />
          <button className="bg-white text-sm text-black p-2 rounded-lg">
            + New Client
          </button>
        </div>
        {/* table */}
        <div className="mt-8 bg-[#141414] rounded-lg shadow-md overflow-hidden border border-gray-800">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#1c1c1c] text-gray-300 uppercase text-xs ">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                {/* <th className="px-4 py-3 font-semibold">Company</th> */}
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td className="text-white  p-4 text-center" colSpan={4}>
                    Sorry No data Found
                  </td>
                </tr>
              ) : (
                clients.map((client, index) => (
                  <tr
                    key={index}
                    className={`text-sm ${
                      index % 2 === 0 ? "bg-[#121212]" : "bg-[#181818]"
                    } hover:bg-[#222222] transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 text-white">{client.name}</td>
                    <td className="px-4 py-3 text-gray-300">{client.phone}</td>
                    <td className="px-4 py-3 text-gray-300">{client.email}</td>
                    {/* <td className="px-4 py-3 text-gray-300">
                      {client.company}
                    </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
