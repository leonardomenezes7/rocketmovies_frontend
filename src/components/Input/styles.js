import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input_bg};
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 0.5rem;

  > input {
    width: 100%;
    background: none;
    border: none;
    padding: 1.12rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.input_color};
  }
`