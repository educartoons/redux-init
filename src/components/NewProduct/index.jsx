import { useDispatch } from "react-redux";

import { addProduct } from "../../store/productsSlice";
import { newId } from "./utils";

export default function NewProduct() {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      id: newId(),
      name: 'Nike Pegasus 40 "Eliud Kipchoge"',
      subtitle: "Road Running Shoes",
      price: 130,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84cdecfe-c952-432b-9e01-b22126cfe197/pegasus-40-eliud-kipchoge-road-running-shoes-mVJdmS.png",
    };
    dispatch(addProduct(newProduct));
  };

  return <button onClick={handleAddProduct}>Add Product</button>;
}
