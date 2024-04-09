import { Container } from "./styles";
import { FaStar } from "react-icons/fa";

export function Rating({grade}) {
  let stars =[]

  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      stars.push(<FaStar key={i} />);
    }
  }
  
  return(
    <Container>
     {stars}
    </Container>
  )
}