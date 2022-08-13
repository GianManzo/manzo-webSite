import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Box_Title = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    color: ${gray.g4};
    font-family: 'Fira Sans', sans-serif;
    font-size: 38px;
    font-weight: bold;
    text-align: left;
    cursor: default;
    span {
      color: ${purple.p6};
    }
  }
  z-index: 10;
  position: relative;
  margin-inline: 24px;
  margin-top: 24px;
`
export const Details = styled.div`
  position: absolute;
  top: -10px;
  left: -30px;
  z-index: -10;
`
