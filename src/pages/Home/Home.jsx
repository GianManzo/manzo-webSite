import React from 'react'
import * as C from './_Home'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import { ReactComponent as Rocket } from '../../assets/rocket.svg'

export const Home = () => {
  return (
    <>
      <C.Wrapper>
        <C.Container>
          <C.Title>Gian Manzo</C.Title>
          <C.Subtitle>Desenvolvedor Front-end 💻</C.Subtitle>
          <C.Btn>
            Open Menu <span>{<MenuIcon width={18} height={18} />}</span>
          </C.Btn>
          <C.Rocket className="rocket-animation">
            <Rocket />
          </C.Rocket>
        </C.Container>
      </C.Wrapper>
    </>
  )
}
