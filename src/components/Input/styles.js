import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input_bg};
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: .8rem;

  > input {
    width: 100%;
    background: none;
    border: none;
    padding: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.colors.input_color};
  }
`