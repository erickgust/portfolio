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
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray.main};
  text-align: center;
  max-width: 72rem;
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
  }

  > strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    line-height: 1.5;
  }

  > small {
    color: ${({ theme }) => theme.colors.gray.main};
    font-size: 1.6rem;
  }
`
