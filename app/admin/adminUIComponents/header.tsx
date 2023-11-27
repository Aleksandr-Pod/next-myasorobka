'use client'
import ButtonMain from "@/app/uiComponents/kit/button"

export default function Header({ clickFn }: { clickFn: (arg: boolean) => void }) {

  return (
    <div className="flex mb-7 w-[70vw]">
      <div className="w-[240px]"></div>
      <h2 className="mx-auto mt-8 text-3xl text-txt-main-white text-center font-medium">Каталог Товарів</h2>
      <ButtonMain style="redMedium" btnClass={"mt-6"} clickFn={() => clickFn(true)}>
        Додати товар
      </ButtonMain>
    </div>
  )
}