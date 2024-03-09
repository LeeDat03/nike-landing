import Stars from "../components/Stars";
import { reviews } from "../constants";

const Customers = () => {
  return (
    <section className="p-large flex flex-col items-center gap-16 py-28 lg:gap-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="heading-secondary text-center max-lg:text-4xl max-md:leading-snug">
          What Our <span> Customers</span> Say?
        </h2>
        <p className="text-prime mt-2 text-center md:max-w-[480px]">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex w-full flex-wrap items-center justify-around gap-20">
        {reviews.map((person) => {
          return (
            <div
              key={person.customerName}
              className="flex flex-col items-center justify-center gap-5"
            >
              <img
                src={`${person.imgURL}`}
                alt="Reviewers Image"
                width={120}
                height={120}
                className="rounded-full"
              />
              <p className="max-w-lg text-center text-xl text-slate-500 lg:max-w-sm">
                {person.feedback}
              </p>
              <Stars />
              <h4 className="font-montserrat text-2xl font-bold">
                {person.customerName}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;
