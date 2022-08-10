import React from 'react'
import * as C from './styles'
import { ReactComponent as Logo } from '../../assets/Marca.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'

export const Header = () => {
  return (
    <>
      <C.Header>
        <C.Container>
          <Logo />
          <MenuIcon width={20} height={20} />
        </C.Container>
      </C.Header>
    </>
  )
}
