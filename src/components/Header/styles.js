import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  grid-area: header;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  padding: 0 12.3rem;
  align-items: center;
  justify-content: space-between;
  height: 11.6rem;

  > h2 {
    color: ${({ theme }) => theme.colors.pink};
  }

  > div {
    width: 63rem;
  }
`

export const Search = styled.div`

`

export const User = styled.section`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: .9rem;
    color: ${({ theme }) => theme.colors.white};

    button  {
      border: 0;
      color: ${({ theme }) => theme.colors.input_color};
      background-color: ${({ theme }) => theme.colors.bg_800};
      align-self: end;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray};
  }

  > button {
    border: 0;
    color: ${({ theme }) => theme.colors.input_color};
    background-color: ${({ theme }) => theme.colors.bg_800};;
  }
`