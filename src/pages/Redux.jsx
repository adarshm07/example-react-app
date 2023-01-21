import ReduxCounter from "../components/ReduxCounter";
import { Link } from "react-router-dom";

export default function Redux() {
  return (
    <div>
      <h2>Redux Example</h2>
      <ReduxCounter />

      <br />

      <Link to={"/"}>All examples</Link>
      <br />
      <Link to={"/localstorage"}>LocalStorage</Link>
    </div>
  );
}
