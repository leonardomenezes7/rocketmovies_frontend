import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"


export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;
    background-color: ${({ theme }) => theme.colors.transparent_pink};
    display: flex;
    align-items: center;

    > a {
      margin-left: 9rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.pink};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-left: 3rem;
      }
    }
  }
`

export const Avatar = styled.div`
  height: 11.62rem;
  width: 11.62rem;
  margin: -5.81rem auto;
  position: relative;

  > img {
    height: 11.62rem;
    width: 11.62rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 0.62rem;
    background-color: ${({ theme }) => theme.colors.pink};
    padding: 0.87rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.tag_bg};
    }
  }
`

export const Form = styled.form`
  width: 21.25rem;
  margin: 9.81rem auto;
`
