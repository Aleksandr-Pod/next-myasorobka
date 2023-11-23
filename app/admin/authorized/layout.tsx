import React from "react";
import SideBar from "@/app/admin/adminUIComponents/sideBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-bg-black h-full max-w-full">
      <SideBar />
      {children}
    </div>
  )
}