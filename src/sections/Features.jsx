import { services } from "../constants";

const Features = () => {
  return (
    <section className="flex flex-wrap items-stretch gap-10">
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="flex flex-[1] flex-col gap-4 rounded-2xl px-10 py-14 shadow-2xl"
          >
            <div className="inline-block self-start rounded-full bg-primary p-3">
              <img
                src={`${service.imgURL}`}
                alt={service.label}
                width={25}
                height={25}
              />
            </div>
            <h3 className="font-montserrat text-xl font-bold">
              {service.label}
            </h3>
            <p className="font-montserrat text-base text-slate-500">
              {service.subtext}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
