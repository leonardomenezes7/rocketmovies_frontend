import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.colors.input_bg};
  color: ${({ theme, isnew }) => isnew ? "transparent" : theme.colors.input_bg};
  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.colors.input_color}` : "none"};
  padding: 1.6rem;
  border-radius: 10px;
  display: flex;


  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.pink};
    display: flex;
    align-items: center;

    svg {
      font-size: 2.4rem
    }
  }

  > input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }
`