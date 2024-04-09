import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.main`
  grid-area: content;
  overflow-y: auto;

  > section {
    padding: 0 12.3rem;
    padding-bottom: 15.6rem;

    a {
      color: ${({ theme }) => theme.colors.pink};
      margin-top: 4rem;
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
      margin-top: 2.4rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    > .user {
      display: flex;
      margin-top: 2.4rem;
      gap: .8rem;
      align-items: center;

      img {
        height: 1.6rem;
        width: 1.6rem;
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
      margin-top: 4rem;
      display: flex;
      gap: .8rem;
    }

    > .text {
      margin-top: 4rem;

      p {
        text-align: justify;
      }
    }
  }
`