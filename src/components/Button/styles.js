import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 10px;
  padding: 1.6rem;
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`