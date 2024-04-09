import styled from "styled-components";
import backgroundImg from "../../assets/background_signin.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  padding: 0 13.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.pink};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text_color};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 4.8rem 0;
  }

  > a {
    color: ${({ theme }) => theme.colors.pink};
    align-self: center;
    margin-top: 4.2rem;
    display: flex;
    align-items: center;

    svg {
      font-size: 2rem;
      margin-right: .2rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`