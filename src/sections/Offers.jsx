import Button from "../components/Button";

const Offers = () => {
  return (
    <section className="flex items-center gap-5 max-xl:flex-col-reverse max-xl:gap-12 ">
      <div className="flex-[1]">
        <img src="/src/assets/images/offer.svg" alt="Offer Image" />
      </div>

      <div className="flex flex-[1] flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h2 className="heading-secondary">
            <span>Special </span>
            Offers
          </h2>
          <p className="text-prime">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-prime">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Button type="primary">View details</Button>
          <Button type="secondary">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
