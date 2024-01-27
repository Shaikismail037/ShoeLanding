import Button from "../components/button";
import { shoe8 } from "../assets/images";

const SupperQuality = () => {
  return (
    <section id="about-us" className="max-container flex justify-around">
      <div className="mt-5">
        <h2 className=" font-palanquin text-4xl max-sm:text-[72px] font-bold ">
          <span className="">We Provide You</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat mt-6 mb-14 sm:max-w-sm lg:max-w-lg info-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga
          sequi Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam fuga sequi
        </p>
        <Button className="mt-11" label="View Details" />
      </div>
      <div className="flex-1 flex justify-center items-center ">
        
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SupperQuality;
