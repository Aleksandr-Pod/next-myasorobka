import ButtonMain from "@/app/uiComponents/kit/button"
type IProps = { title: string; btnName: string; btnLink: string }

export default function Header({ title, btnName, btnLink }: IProps) {
  return (
    <div className="flex mb-7 w-[70vw] relative">
      <div className="w-[240px]"></div>
      <h2 className="mx-auto mt-8 text-3xl text-txt-main-white text-center font-medium">{title}</h2>
      <ButtonMain style="redMedium" btnClass={"mt-6"} link={btnLink}>
        {btnName}
      </ButtonMain>
    </div>
  )
}