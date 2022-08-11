import styled from 'styled-components'
import { gray } from '../../_variables/_colors'

export const height_Footer = '48px'

export const Footer = styled.footer`
  background-color: ${gray.g19};
  height: ${height_Footer};
  display: flex;
  justify-content: center;
`

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Nav = styled.nav`
  width: 100%;
  margin-inline: 24px;
`
