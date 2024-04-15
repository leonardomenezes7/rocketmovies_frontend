import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.colors.tag_bg};
  padding: .8rem 1rem;
  border-radius: .8rem;
  font-size: 0.75rem;
  margin-right: .5rem;
`