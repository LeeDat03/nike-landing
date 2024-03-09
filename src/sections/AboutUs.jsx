import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-16 lg:flex-row lg:gap-5">
      <div className="flex flex-[1] flex-col items-start">
        <h2 className="heading-secondary mt-10 leading-normal">
          We Provide You <span> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-5 font-montserrat text-base text-slate-500 xl:w-[500px]">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mb-10 mt-5 font-montserrat text-base text-slate-500 xl:mb-14 xl:w-[500px]">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button type="primary">
          Shop now
          <span>
            <img src="./src/assets/icons/arrow-right.svg" alt="" />
          </span>
        </Button>
      </div>
      <div className="flex flex-[1] items-center justify-center">
        <img src="./src/assets/images/shoe8.svg" alt="Shoe image" />
      </div>
    </section>
  );
};

export default AboutUs;
