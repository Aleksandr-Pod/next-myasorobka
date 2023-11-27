'use client'
import ButtonMain from "@/app/uiComponents/kit/button"
import { useState } from "react"

export default function Header({ clickFn }: { clickFn?: (arg: boolean) => void }) {
  const [addProductPopup, setAddProductPopup] = useState(false);

  return (
    <div className="flex mb-7 w-[70vw] relative">
      <div className="w-[240px]"></div>
      <h2 className="mx-auto mt-8 text-3xl text-txt-main-white text-center font-medium">Каталог Товарів</h2>
      <ButtonMain style="redMedium" btnClass={"mt-6"} clickFn={() => setAddProductPopup(true)}>
        Додати товар
      </ButtonMain>
    </div>
  )
}