'use client'

import { usePathname } from "next/navigation"
import { Line } from "@/app/uiComponents/kit/iconComponent";

export default function NavLines({ place }: { place: 'orders' | 'products' }) {

  const pathName = usePathname();
  console.log('pathName:', pathName);
  // console.log(window.location.pathname);

  return (
    <div className="py-1">
      <Line active={pathName.includes(place)} long />
    </div>
  )
}