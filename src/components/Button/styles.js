import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`