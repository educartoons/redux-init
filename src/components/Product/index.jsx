import {} from "react";

import "./product.scss";

export default function Product(props) {
  const { product } = props;

  return (
    <div className="w-1/4">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="hover-this">
        <div className="item1">
          <h2 className="font-normal">{product.name}</h2>
          <h3 className="font-light">{product.subtitle}</h3>
          <p className="font-normal">{product.price}</p>
        </div>
        <div className="item2">
          <p>Vamos a comprarlo ahora</p>
          <p className="font-normal">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
