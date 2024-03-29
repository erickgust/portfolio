import styled from 'styled-components'

export const Div = styled.div`
  margin-bottom: 6.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Address = styled.address`
  font-style: normal;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2.4rem;
`

export const Desc = styled.p`
  font-size: clamp(1.4rem, 1.215rem + 0.513vw, 1.8rem);
  color: ${({ theme }) => theme.colors.gray.main};
  text-align: center;
  max-width: 72rem;
  margin: 0;

  > span {
    margin: 0.8rem 0;
    display: block;
  }
`

export const ContactContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    padding: 1.6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 1.6rem;

    > img {
      vertical-align: middle;
    }

    @media (max-width: 768px) {
        padding: 1.2rem;

        > img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
  }

  > strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.4rem, 1.215rem + 0.513vw, 1.8rem);
    line-height: 1.5;
  }

  > small, a {
    color: ${({ theme }) => theme.colors.gray.main};
    font-size: clamp(1.2rem, 1.015rem + 0.513vw, 1.6rem);
    text-decoration: none;
  }
`
