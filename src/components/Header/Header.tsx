import { HeaderStyle } from "./style";
import rocketIcon from "../../assets/rocket.svg"

export function Header(){
  return(
    <HeaderStyle>
      <img src={rocketIcon} alt="Icone de um foguete" />
      <h1>
        <span className="text-to">to</span>
        <span className="text-do">do</span>
      </h1>
    </HeaderStyle>
  )
}