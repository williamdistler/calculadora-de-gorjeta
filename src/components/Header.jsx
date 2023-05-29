import logo from "../images/logo.png"

import { HeaderContainer } from "./Header.styles"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  )
}