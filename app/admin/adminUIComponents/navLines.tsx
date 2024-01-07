'use client'

import { usePathname } from "next/navigation"
import { Line } from "@/app/uiComponents/kit/iconComponent";

export default function NavLines({ place }: { place: 'orders' | 'products' }) {
  const pathName = usePathname();
  console.log('pathName:', pathName);

  return (
    <div className="py-1">
      <Line active={pathName.endsWith(place)} long />
    </div>
  )
}