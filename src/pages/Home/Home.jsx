import React from 'react'
import * as C from './_Home'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import { ReactComponent as Rocket } from '../../assets/rocket.svg'

export const Home = ({ modal, setModal }) => {
  return (
    <>
      <C.Container>
        <C.Wrapper>
          <div className="right-animation">
            <h1>Gian Manzo</h1>
            <p>Desenvolvedor Front-end 💻</p>
            <C.Btn onClick={() => setModal(!modal)}>
              Open Menu <span>{<MenuIcon width={18} height={18} />}</span>
            </C.Btn>
          </div>
          <C.Rocket className="show-animation">
            <Rocket />
          </C.Rocket>
        </C.Wrapper>
      </C.Container>
    </>
  )
}
