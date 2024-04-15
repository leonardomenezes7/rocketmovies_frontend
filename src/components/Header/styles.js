import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  width: 100%;
  grid-area: header;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  padding: 0 7.68rem;
  align-items: center;
  justify-content: space-between;
  height: 7.25rem;

  > h2 {
    color: ${({ theme }) => theme.colors.pink};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > div {
    width: 39.3rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 12rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 26rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 30rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      width: 39.3rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 0 7.68rem;
  }
`

export const Search = styled.div``

export const User = styled.section`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: .9rem;
    color: ${({ theme }) => theme.colors.white};

    button  {
      border: 0;
      color: ${({ theme }) => theme.colors.input_color};
      background-color: ${({ theme }) => theme.colors.bg_800};
      align-self: end;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
    }
  }

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray};
  }

  > button {
    border: 0;
    color: ${({ theme }) => theme.colors.input_color};
    background-color: ${({ theme }) => theme.colors.bg_800};;
  }
`