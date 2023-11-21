import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <p className="text-xs leading-[1.5] text-txt-light-grey text-center ">
      Використовуючи цей сайт Ви погоджуєтесь з{" "}
      <Link href="#" className="underline ">
        Правилами Користування
      </Link>
    </p>
  );
};

export default PrivacyPolicy;
