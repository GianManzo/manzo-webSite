import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const height_Header = '72px'

export const Header = styled.header`
  height: ${height_Header};
  nav {
    height: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin-inline: 24px;
      ul {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
      }
      li:not(.right-animation) {
        a {
          display: none;
          text-decoration: none;
          color: ${gray.g6};
          font-size: 14px;
          transition: 0.3s;
          opacity: 80%;
          :hover {
            opacity: 100%;
          }
          @media (min-width: 768px) {
            display: block;
          }
        }
      }
    }
  }
`
