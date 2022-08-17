import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Box_Title = styled.div`
  height: 100%;
  margin-block: 34px;
  margin-inline: 24px;
  position: relative;
  width: 100%;
  z-index: 10;

  h1 {
    color: ${gray.g4};
    cursor: default;
    font-family: 'Fira Sans', sans-serif;
    font-size: 38px;
    font-weight: bold;
    text-align: left;

    span {
      color: ${purple.p6};
    }
  }
  @media (min-width: 768px) {
    max-width: 1000px;
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
