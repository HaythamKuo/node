import { useDispatch } from "react-redux";
import { fetchUser } from "../store";
function LandingPage() {
  const dispatch = useDispatch();

  function onclick() {
    dispatch(fetchUser());
  }

  return (
    <>
      <div>this is LandingPage</div>
      <button onClick={onclick}>按我</button>
    </>
  );
}
export default LandingPage;
