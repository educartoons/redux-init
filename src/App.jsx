import { Provider } from "react-redux";

import { store } from "./store/store";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import ResetProducts from "./components/ResetProducts";

import "./style.css";

export default function App() {
  return (
    <Provider store={store}>
      <h2>ReactJS Application</h2>
      <Products />
      <NewProduct />
      <ResetProducts />
    </Provider>
  );
}
