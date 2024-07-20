import React from "react";
import Sidebar from "../sidebar/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  return (
    <main
      className={`min-h-screen relative flex h-full w-full overflow-auto bg-[#171717] ${inter.className} text-gray-400`}
    >
      <aside className="hidden md:block min-w-[200px] p-4 overflow-y-auto">
        <Sidebar />
      </aside>
      <section className="flex-1 max-w-full relative p-4 bg-[#212121]">
        {children}
      </section>
    </main>
  );
}

export default Layout;
