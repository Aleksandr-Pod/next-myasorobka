
import Link from 'next/link';
// import { usePathname, } from "next/navigation";
import Image from "next/image";
// import orders from '../authorized/orders/page';
// import { useNavigate, useLocation } from "react-router-dom";
// import auth from "../store/auth";
// import logo from "../images/logo.png";
// import * as icon from "../icons/iconComponent";

const SideBar = () => {
  // const navigate = useNavigate();
  // const pathName = usePathname();

  return (
    <div className="flex flex-col w-[356px] min-h-screen text-txt-main-white text-center font font-medium border-r-2 border-[#FBDD3D] rounded-3xl bg-bg-black">
      <Image src='/logo.png' alt="logo" width={100} height={110} className="w-full px-24 py-8" />
      <p className="text-4xl text-txt-main-yellow font-semibold pb-8">Hello ADMIN</p>

      <Link href={'/admin/authorized/products'} className="text-3xl">
        Каталог Товарів
      </Link>
      {/* <div className="py-1 mb-8">
        <icon.Line active={pathname.endsWith("products")} long />
      </div> */}

      <Link href={'/admin/authorized/orders'} className="text-3xl">
        Список Замовлень
      </Link>
      {/* <div className="py-1">
        <icon.Line active={pathname.endsWith("orders")} long />
      </div> */}

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
