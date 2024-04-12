import styled from "styled-components";
import backgroundImg from "../../assets/background_signin.png"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  padding: 0 8.37rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0rem;
    margin: 0 auto;
  }

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  > p {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.colors.text_color};
  }

  > h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 3rem 0;
  }

  > a {
    color: ${({ theme }) => theme.colors.pink};
    align-self: center;
    margin-top: 2.62rem;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.25rem;
      margin-right: .2rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`