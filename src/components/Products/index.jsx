import { useSelector } from "react-redux";
import Product from "../Product";

export default function Products() {
  const products = useSelector((state) => state.products.items);

  console.log(products);

  return (
    <div className="flex gap-2">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
