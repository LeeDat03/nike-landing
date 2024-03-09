import {
  Nav,
  Hero,
  AboutUs,
  Products,
  Features,
  Offers,
  Customers,
  CallToAction,
  Footer,
} from "./sections/index";

export default function App() {
  return (
    <main className="relative">
      <header className="p-large absolute top-5 z-10 w-full">
        <Nav />
      </header>

      <section className="p-large max-xl:p-0" id="home">
        <Hero />
      </section>

      <section className="p-large mt-52 max-sm:mt-40" id="products">
        <Products />
      </section>

      <section className="p-large mt-32 xl:mt-52" id="about-us">
        <AboutUs />
      </section>

      <section className="p-large mt-32">
        <Features />
      </section>

      <section className="p-large mt-40">
        <Offers />
      </section>

      <section className="mt-32 w-full bg-[#ECEEFF] max-md:mt-20">
        <Customers />
      </section>

      <section className="p-large mt-40 max-sm:mt-24" id="contact-us">
        <CallToAction />
      </section>

      <section className="mt-40 w-full bg-black max-sm:mt-24 ">
        <Footer />
      </section>
    </main>
  );
}
