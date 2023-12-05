import Image from "next/image";
import Link from "next/link";

const KiwiCode = () => {
  return (
    <div className="flex gap-x-4 flex-col lg:flex-row h-[55px] items-center justify-center">
      <p className="text-base text-txt-main-white opacity-[0.6] text-center">Designed and Development by</p>
      <Link href="#">
        <Image
          src="/kiwicode.png"
          width={100}
          height={50}
          alt="Logo KiwiCode Solution"
          style={{ width: 100, height: 50 }}
        />
      </Link>
    </div>
  );
};

export default KiwiCode;
