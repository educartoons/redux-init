import { useDispatch } from "react-redux";
import { resetProducts } from "../../store/productsSlice";

export default function ResetProducts() {
  const dispatch = useDispatch();

  const handleResetProducts = () => {
    dispatch(resetProducts());
  };

  return <button onClick={handleResetProducts}>Reset</button>;
}
