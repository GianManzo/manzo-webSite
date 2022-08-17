import styled from 'styled-components'
import { gray } from '../../_variables/_colors'

export const height_Header = '72px'

export const Header = styled.header`
  height: ${height_Header};

  nav {
    height: 100%;

    ul {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: space-between;
      margin-inline: 1.5rem;

      ul {
        display: flex;
        justify-content: space-evenly;
        max-width: 25rem;
        width: 100%;
      }

      li:not(.right-animation) {
        a {
          color: ${gray.g6};
          display: none;
          font-size: 0.875rem;
          opacity: 0.7;
          text-decoration: none;
          transition: 0.3s;

          :hover {
            opacity: 1;
          }

          @media (min-width: 768px) {
            display: block;
          }
        }
        a.active {
          background-color: ${gray.g14};
          border-radius: 5px;
          padding: 0.625rem;
          color: ${gray.g1};
          opacity: 1;
        }
      }
      li > {
        svg {
          cursor: pointer;
          opacity: 0.7;
          transition: 0.3s;

          :hover {
            opacity: 1;
          }
        }
      }
    }
  }
`
