/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <section>
      <img src={product.img} />
      <div>
        <h1>{product.title}</h1>
        <div>
          <span>{product.span}</span>
          <p>{product.reviews}</p>
        </div>
        <div>
          <p>{product.price}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
