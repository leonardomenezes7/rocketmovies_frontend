import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function NoteItem({ value, isnew, onClick, ...rest }) {
  return(
    <Container isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isnew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}