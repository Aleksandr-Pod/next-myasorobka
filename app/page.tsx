import Footer from "./uiComponents/footer";
import Header from "./uiComponents/header";

export default function Home() {
  // const textAnimation = {
  //   hidden: {
  //     scale: 0,
  //     opacity: 0,
  //   },
  //   visible: (custom: number) => ({
  //     scale: 1,
  //     opacity: 1,
  //     transition: { delay: custom * 0.4, duration: 0.7 },
  //   }),
  // };
  return (
    <>
      <main>
        <div className="bg-hero bg-no-repeat bg-cover min-h-[764px] min-w-screen text-txt-main-white relative">
          <div className="selection:max-w-[1440px] mx-auto px-[10px]">
            <Header /> {/*client component */}
            <p className="mt-9 ml-0 lg:ml-[142px] max-w-[950px] text-[46px] lg:text-[56px] font-bold leading-tight">
              З турботою про тебе у <span className="text-txt-main-yellow">кожному шматочку!</span>
            </p>
            <p className="mt-12 ml-0 lg:ml-[238px] max-w-[840px] text-[32px] font-bold leading-snug">
              Доставка до кожного куточку України <span className="text-txt-main-yellow">вже зараз!</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
