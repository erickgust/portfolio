import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin: 5.6rem 0;
`

export const Title = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 4rem;
`

export const Article = styled.article`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  border: 1px solid ${theme.colors.gray[200]};
  background-color: ${theme.colors.gray[400]};

  img, div {
    aspect-ratio: 21 / 9;
    border: 1px solid ${theme.colors.gray[200]};
  }

  div {
    color: ${theme.colors.white};
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: 3.2rem;
    background-color: ${theme.colors.dark};
  }

  a {
    margin-bottom: 2.4rem;
    text-decoration: none;
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  strong {
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    color: ${theme.colors.gray.main};
    font-size: 1.4rem;
  }
`}`
