import styled, { keyframes } from 'styled-components'

export const height_Footer = '48px'

const animationFooter = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Footer = styled.footer`
  display: flex;
  height: ${height_Footer};
  justify-content: center;
  margin-inline: 1.5rem;

  nav {
    width: 100%;

    ul {
      animation: ${animationFooter} 3s ease;
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: space-around;

      li {
        opacity: 0.6;
        transition: 0.3s;

        :hover {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 768px) {
    nav {
      width: 50%;
    }
  }
`
