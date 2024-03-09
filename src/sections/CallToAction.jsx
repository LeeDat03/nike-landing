import Button from "../components/Button";

const CallToAction = () => {
  return (
    <section className="flex w-full items-center justify-between gap-10 max-lg:flex-wrap">
      <h2 className="heading-secondary lg:max-w-md">
        Sign Up from <span> Updates</span> & Newsletter
      </h2>
      <div className="flex w-[40%] items-center gap-5 rounded-full border-slate-300 px-4 py-2 max-lg:w-full max-sm:flex-col md:border-2 ">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input w-full"
        />
        <div className="min-w-max self-end">
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
