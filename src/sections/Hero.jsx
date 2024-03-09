import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [shoeIndex, setShoeIndex] = useState(3);

  return (
    <section className="flex h-full w-full gap-20 max-xl:flex-col max-sm:gap-10">
      <div className="max-xl:p-large w-2/5 pt-32 max-xl:w-full max-xl:pt-28 max-sm:pt-24">
        <h3 className="text-xl text-primary">Our Summer collections</h3>
        <h1 className="mt-9 font-palanquin text-8xl font-bold -tracking-normal  max-lg:text-7xl ">
          <span className="relative z-10 xl:text-nowrap xl:bg-white xl:pr-10">
            The New Arrival
          </span>
          <br />
          <span className="mt-7 inline-block text-primary max-md:mt-0">
            Nike
          </span>
          <span> Shoes</span>
        </h1>
        <p className="mb-12 mt-6 max-w-96 text-xl text-slate-500 ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button type="primary">
          Shop Now{" "}
          <span>
            <img src={arrowRight} alt="Arrow right" />
          </span>
        </Button>
        <div className="mt-24 flex flex-wrap items-center gap-24 max-lg:mt-20">
          {statistics.map((statis) => {
            return (
              <div
                key={statis.label}
                className="flex flex-col justify-center gap-1"
              >
                <h3 className="font-montserrat text-4xl font-bold">
                  {statis.value}
                </h3>
                <p className="font-montserrat text-base text-slate-500">
                  {statis.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-0 flex flex-1 flex-col items-center justify-center bg-hero bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={`./src/assets/images/big-shoe${shoeIndex}.png`}
            alt="Shoe Image"
            width={500}
            height={400}
          />
        </div>

        <div className="absolute -bottom-[80px] flex w-4/5 items-stretch justify-around max-sm:-bottom-[40px]">
          {shoes.map((shoe, index) => {
            return (
              <div
                key={shoe.bigShoe}
                className={`${index + 1 === shoeIndex ? "card_active" : ""} flex h-[150px] w-[150px] items-center justify-center rounded-xl bg-card bg-cover bg-center p-2 max-sm:h-[80px] max-sm:w-[80px]`}
                onClick={() => setShoeIndex(index + 1)}
              >
                <img
                  src={`./src/assets/images/thumbnail-shoe${index + 1}.svg`}
                  alt="Thumbnail"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
