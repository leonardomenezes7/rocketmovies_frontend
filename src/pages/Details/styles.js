import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.main`
  grid-area: content;
  overflow-y: auto;

  > section {
    padding: 0 7.68rem;
    padding-bottom: 9.75rem;



    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 0 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 0 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      padding: 0 7.68rem;
    }

    a {
      color: ${({ theme }) => theme.colors.pink};
      margin-top: 2.5rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: .5rem;
      }
    }

    button {
      color: ${({ theme }) => theme.colors.pink};
      background-color: ${({ theme }) => theme.colors.bg_800};
      border: 0;
      margin-top: 4rem;
    }

    > .title {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    > .user {
      display: flex;
      margin-top: 1.5rem;
      gap: .8rem;
      align-items: center;

      img {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
      }

      span {
        display: flex;
        align-items: center;
        gap: .6rem;

        svg {
          color: ${({ theme }) => theme.colors.pink};
        }
      }
    }

    > .tags {
      margin-top: 2.5rem;
      display: flex;
      gap: .8rem;
    }

    > .text {
      margin-top: 2.5rem;

      p {
        text-align: justify;
        word-break: break-all;
      }
    }
  }
`