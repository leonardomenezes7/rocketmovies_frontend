import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    padding: 0 7.68rem;
    grid-area: content;
    overflow-y: auto;

    > .title {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin: 2.5rem 0;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        align-items: baseline;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      padding: 0 7.68rem;
    }
  }
`

export const New = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  button {
    width: 12.93rem;
  }
`