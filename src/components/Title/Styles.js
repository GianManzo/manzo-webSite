import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'
import { rightAnimation } from '../../Global-animation'

export const Box_Title = styled.div`
  animation: ${rightAnimation} 1.5s ease;
  height: 100%;
  margin-block: 2.125rem;
  margin-inline: 1.5rem;
  position: relative;
  width: 100%;
  z-index: 10;

  h1 {
    color: ${gray.g4};
    cursor: default;
    font-family: 'Fira Sans', sans-serif;
    font-size: 2.375rem;
    font-weight: bold;
    text-align: left;

    span {
      color: ${purple.p6};
    }
  }
  @media (min-width: 768px) {
    max-width: 62.5rem;
  }

  @media (min-width: 1200px) {
    margin-inline: auto;
  }
`

export const Details = styled.div`
  left: -30px;
  position: absolute;
  top: -10px;
  z-index: -10;
`
