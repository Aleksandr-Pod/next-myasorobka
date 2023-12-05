import Image from "next/image";
import reviews from "@/app/utils/reviews.json";
import Title from "./kit/title";
import ReviewCard from "./reviews/reviewCard";
import SwiperButtons from "./kit/swiperButtons";

const Review = () => {
  return (
    <section className="bg-bg-white min-h-[860px] pt-10 pb-40 relative">
      <Image
        src="/hot-pepper_1.png"
        alt="hot pepper"
        width={173}
        height={480}
        className="absolute top-[-40px] right-0 w-[173px] h-[480px]"
      />
      <div className="max-w-[1440px] mx-auto px-[10px] relative">
        <Title tClass="mb-14" type="black">
          Відгуки про нашу працю
        </Title>

        <div className="grid grid-cols-3 gap-4 w-full relative mx-auto reviews">
          {reviews.map((el) => (
            <ReviewCard review={el} key={el.id} />
          ))}
        </div>
        <SwiperButtons />
        <Image
          src="/rosemary-big.png"
          alt="rosemary"
          width={800}
          height={173}
          className="md:h-[82px] md:w-[480px] lg:h-[137px] lg:w-[800px] absolute bottom-[-80px] left-0 md:bottom-[-140px] md:left-[136px] lg:bottom-[-150px] lg:left-[130px] xl:bottom-[-137px] xl:left-[295px] z-[2]"
          style={{ width: 800, height: 173 }}
        />
      </div>
    </section>
  );
};
export default Review;
