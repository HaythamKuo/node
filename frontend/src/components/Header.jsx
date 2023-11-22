import { HeaderStyle } from "./styles/Header.style";
import { ButtonStyle } from "./styles/Button.style";
import logo from "../assets/3615749_delivery_mail_mailman_occupation_postman_icon.svg";

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <img src={logo} alt="logo" />
        <ButtonStyle as="a">登入</ButtonStyle>
      </nav>
    </HeaderStyle>
  );
}
export default Header;
