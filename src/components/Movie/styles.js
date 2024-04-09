import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent_pink};
  padding: 3.2rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  > div {
    margin-bottom: 1.6rem;
    margin-top: .8rem;
  }

  > p {
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`