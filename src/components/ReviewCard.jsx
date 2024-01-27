import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <img 
      src={imgURL} 
      alt="rounder-full" 
      className=" w-[120px] h-[120px] rounded-full"  />

      <p className=" font-montserrat mt-6 max-w-sm text-center ">{feedback}</p>

      <div className="mt-3 flex font-montserrat font-semibold text-slate-gray">
        <img src={star} width={24} height={24} alt="star" />      
        <p>{rating}</p>

        
      </div>

      <h3 className=" mt-1 font-palanquin font-bold text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
