import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 0 12.3rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    a {
      color: ${({ theme }) => theme.colors.pink};
      margin-top: 4rem;
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 500;
      margin-top: 2.4rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  margin: 4rem 0;

  > div {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    resize: none;
    background-color: ${({ theme }) => theme.colors.input_bg};
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 27.4rem;
    padding: 2rem 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 4rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-weight: 500;
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }

  .items {
    display: flex;
    gap: 2.4rem;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem;
    border-radius: .8rem;
    flex-wrap: wrap;
  }
`