import styled from 'styled-components'
import { gray } from '../../_variables/_colors'
import { height_Header } from '../../components/Header/Styles'
import { height_Footer } from '../../components/Footer/Styles'
import { rightAnimation } from '../../Global-animation'

export const Section = styled.section`
  animation: ${rightAnimation} 1.5s ease;
`

export const Wrapper = styled.div`
  margin-inline: 1.5rem;
`
export const Grid = styled.div`
  color: ${gray.g4};
  display: grid;
  font-family: 'Roboto', sans-serif;
  grid-gap: 4.75rem;
  grid-template-columns: 6.25rem 6.25rem;
  justify-content: center;
  margin-block: 3.25rem;
  width: 100%;

  @media (min-width: 768px) {
    align-content: center;
    grid-template-columns: repeat(4, 6.25rem);
    grid-template-rows: 6.25rem 6.25rem;
    height: calc(100vh - ${height_Header} - ${height_Footer} - 12.5rem);
  }
`

export const Icon = styled.div`
  text-align: center;

  p {
    opacity: 0;
    transition: 0.3s;
    transform: translateY(-10px);
  }

  :hover p {
    opacity: 1;
    transform: translateY(0);
  }
`
