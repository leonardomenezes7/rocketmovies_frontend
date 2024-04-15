import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent_pink};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;

  > div {
    margin-bottom: 1rem;
    margin-top: .8rem;
  }

  > p {
    margin-bottom: 1.5rem;
    text-align: justify;
    word-break: break-all;
  }
`