import styled from 'styled-components'

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

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.gray[400]};

  img {
    aspect-ratio: 21 / 9;
    object-fit: cover;
    object-position: center;
    margin-bottom: 2.4rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.main};
    font-size: 1.4rem;
  }
`
