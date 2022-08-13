import styled from 'styled-components'

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
    }
  }
`
