import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    padding: 0 12.3rem;
    grid-area: content;
    overflow-y: auto;

    > .title {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin: 4rem 0;
    }
  }
`

export const New = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  button {
    width: 20.7rem;
  }
`