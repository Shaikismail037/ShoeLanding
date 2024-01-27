import { arrowRight } from "../assets/icons";
import Button from "../components/button";
import { statistics, shoes } from "../components/constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {" "}
        {/* paddind-x in index.css*/}
        <p className="text-montserrat text-xl text-coral-red ">
          OUR Summer Collection
        </p>
        <h1 className="mt-10 font-montserrat text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat mt-6 mb-14 leading-8 sm:max-w-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga
          sequi
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start gap-10 mt-20 w-full flex-wrap ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ! Shoe Card */}

      <div className="relative flex justify-center text-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center ">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
