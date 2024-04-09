import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.colors.transparent_pink};
    display: flex;
    align-items: center;

    > a {
      margin-left: 14.4rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`

export const Avatar = styled.div`
  height: 18.6rem;
  width: 18.6rem;
  margin: -9.3rem auto;
  position: relative;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 1rem;
    background-color: ${({ theme }) => theme.colors.pink};
    padding: 1.4rem;
    border-radius: 50%;
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.tag_bg};
    }
  }
`

export const Form = styled.form`
  width: 34rem;
  margin: 15.7rem auto;
`
