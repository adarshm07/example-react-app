import TextLocalStorage from "../components/textLocalstorage";
import { Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../store/Counter";

export default function LocalStorage() {
  //   const count = useSelector((state) => state.counter.count);
  //   const dispatch = useDispatch();

  return (
    <div style={{ width: "700px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Localstorage</h2>
        {/* {count} <button onClick={() => dispatch(increment())}>Increment</button> */}
        <Link to={"/"}>All examples</Link>
      </div>
      <TextLocalStorage />

      <br />
      <AddToCart />
    </div>
  );
}
