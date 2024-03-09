import Stars from "../components/Stars";
import { products } from "../constants";

const Products = () => {
  return (
    <section className="flex flex-col gap-14">
      <div>
        <h2 className="heading-secondary leading-normal">
          Our <span className="text-primary"> Popular</span> Products
        </h2>
        <p className="mt-4 font-montserrat text-base tracking-wide text-slate-500  md:max-w-[520px]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-0 gap-y-12">
        {products.map((product, i) => {
          return (
            <div key={i} className="flex flex-col items-start gap-6">
              <img src={`.${product.imgURL}`} alt={product.imgURL} />
              <div className="flex flex-col gap-4">
                <Stars />
                <div>
                  <h3 className="font-montserrat text-2xl font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-primary">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
