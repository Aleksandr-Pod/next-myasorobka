import { TReview } from "@/app/utils/types";
import Image from "next/image";

const ReviewCard = ({ review }: { review: TReview }) => {
  return (
    <div className="w-[300px] md:w-[370px] h-[464px] px-4 pt-4 mx-auto rounded-md shadow-reviewItem pb-8">
      <div className="w-[120px] mx-auto mb-3">
        <Image
          src={review.photo || "/logo.png"}
          width={100}
          height={110}
          alt={`відгук ${review.name}`}
          className={`object-cover w-[120px] h-[120px]
            ${review.photo ? "rounded-full" : ""} 
          `}
        />
      </div>

      <p className="text-center text-xl font-semibold mb-3">{review.name || "Анонімний відгук"}</p>
      <p className="text-center text-xl font-review">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
