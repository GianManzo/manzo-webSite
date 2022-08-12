import styled from 'styled-components'
import { gray } from '../../_variables/_colors'

export const height_Footer = '48px'

export const Footer = styled.footer`
  background-color: ${gray.g19};
  height: ${height_Footer};
  display: flex;
  justify-content: center;
  nav {
    width: 100%;
    margin-inline: 24px;
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        opacity: 60%;
        transition: 0.3s;
        :hover {
          opacity: 100%;
        }
      }
    }
  }
`
