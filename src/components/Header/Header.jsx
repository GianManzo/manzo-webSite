import React from 'react'
import * as C from './_Header'
import { ReactComponent as Logo } from '../../assets/Marca.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'

export const Header = () => {
  return (
    <>
      <C.Header>
        <C.Nav>
          <C.Ul>
            <li className="logo">
              <Logo />
            </li>
            <li style={{ color: 'white', display: 'none' }}>About</li>
            <li style={{ color: 'white', display: 'none' }}>Skills</li>
            <li style={{ color: 'white', display: 'none' }}>Projects</li>
            <li>
              <MenuIcon width={20} height={20} style={{ cursor: 'pointer' }} />
            </li>
          </C.Ul>
        </C.Nav>
      </C.Header>
    </>
  )
}
