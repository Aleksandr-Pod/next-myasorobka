import { TTitle } from "@/app/utils/types";

const Title = ({ type, children, tClass }: TTitle) => {
  return (
    <h2
      className={`w-fit text-4xl font-bold ${
        type === "white" ? "text-txt-main-white" : "text-txt-main-black"
      } ${tClass}`}
    >
      {children}
    </h2>
  );
};

export default Title;
