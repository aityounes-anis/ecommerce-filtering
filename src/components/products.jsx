import data from "../db/data";
import Product from "./product";

const Products = () => {
  return (
    <section>
      {data.map((product) => (
        <Product key={Math.random()} product={product} />
      ))}
    </section>
  );
};

export default Products;
