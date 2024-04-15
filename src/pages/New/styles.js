import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 0 7.68rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      padding: 0 7.68rem;
    }

    a {
      color: ${({ theme }) => theme.colors.pink};
      margin-top: 2.5rem;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 500;
      margin-top: 1.5rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 2.5rem 0;

  > div {
    display: flex;
    gap: 2.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  > textarea {
    resize: none;
    background-color: ${({ theme }) => theme.colors.input_bg};
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 17.1rem;
    padding: 1.25rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 4rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-weight: 500;
    font-size: 1,25rem;
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }

  .items {
    display: flex;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    border-radius: .8rem;
    flex-wrap: wrap;
  }
`