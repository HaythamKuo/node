import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/index";
import { HeaderStyle } from "./styles/Header.style";
import { ButtonStyle } from "./styles/Button.style";
import logo from "../assets/3615749_delivery_mail_mailman_occupation_postman_icon.svg";

function Header() {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  //  console.log(userData);

  //toDo: 錯誤處理與登出reducer

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userIsLogined = Object.keys(userData).length === 0;

  return (
    <HeaderStyle>
      <nav>
        <Link to={userIsLogined ? "/" : "surveys"}>
          <img src={logo} alt="logo" />
        </Link>
        <ButtonStyle
          as="a"
          href={userIsLogined ? "/auth/google" : "/api/logout"}
        >
          {userIsLogined ? "登入" : "登出"}
        </ButtonStyle>
      </nav>
    </HeaderStyle>
  );
}
export default Header;
