"use client";

import Sidebar from "@/components/Sidebar";
import { supabaseClient } from "@/utils/supabaseClient";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function clients() {
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    const { data, error } = await supabaseClient
      .from("Clients")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }
    setClients(data);
  }
  useEffect(() => {
    fetchClients();
  }, []);

  console.log(clients);

  return (
    <div className="min-h-screen bg-black fixed top-0 left-0 w-full ">
      <Sidebar currentPath="/clients" />
      <main className="min-h-screen ml-55 mt-5 text-2xl p-4">
        <h1 className="mb-8 text-white text-3xl">Clients Page</h1>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder="Search Client"
            className="border border-white w-full rounded-lg px-2 text-sm py-1 bg-[#141414] text-white"
          />
          <Link href="" className="bg-white text-xs text-black p-2 rounded-lg">
            + New Client
          </Link>
        </div>
        <div className="flex space-x-4 mt-8">
          <div className="text-white text-sm  font-semibold bg-[#1c1c1c] p-2 py-4 rounded-lg">
            General Overview
          </div>
          <div className="text-white text-sm  font-semibold bg-[#1c1c1c] p-2 py-4 rounded-lg">
            Manage Clients
          </div>
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
                  <td
                    className="text-white  p-4 text-center text-sm"
                    colSpan={4}
                  >
                    Loading...
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
                    <td className="px-4 py-3 text-gray-300">
                      {client.phoneNumber}
                    </td>
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
