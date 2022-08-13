import styled from 'styled-components'
import { gray } from '../../_variables/_colors'

export const Wrapper = styled.div`
  margin-inline: 24px;
`
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 100px;
  justify-content: center;
  grid-gap: 76px;
  margin-block: 52px;
  color: ${gray.g4};
  font-family: 'Roboto', sans-serif;
`
export const Icon = styled.div`
  text-align: center;
  p {
    opacity: 0%;
    transition: 0.3s;
    transform: translateY(-10px);
  }
  :hover p {
    opacity: 100%;
    transform: translateY(0);
  }
`
