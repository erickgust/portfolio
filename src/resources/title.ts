import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  scroll-margin-top: 8rem;
  scroll-snap-margin-top: 8rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`
