
import Link from 'next/link';
import Image from "next/image";
import NavLines from './navLines';

const SideBar = () => {

  return (
    <div className="flex flex-col w-[356px] min-h-screen text-txt-main-white text-center font font-medium border-r-2 border-[#FBDD3D] rounded-3xl bg-bg-black">
      <Image src='/logo.png' alt="logo" width={100} height={110} className="w-full px-24 py-8" />
      <p className="text-4xl text-txt-main-yellow font-semibold pb-8">Hello ADMIN</p>

      <Link href={'/admin/authorized/products'} className="text-3xl">
        Каталог Товарів
      </Link>
      <NavLines place='products' />

      <Link href={'/admin/authorized/orders'} className="text-3xl mt-8">
        Список Замовлень
      </Link>
      <NavLines place='orders' />

      <button
        type="button"
        className="w-[240px] mx-auto mt-auto mb-8 text-xl border rounded-full px-[90px] py-[14px] hover:shadow-btnWhiteS focus:shadow-btnWhiteS"
      // onClick={() => auth.logoutAction()}
      >
        Вийти
      </button>
      <hr />
    </div>
  );
};

export default SideBar;
