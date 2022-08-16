import React from 'react'
import * as C from './Styles'
import { ReactComponent as Logo } from '../../assets/Marca.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import { Modal } from '../Modal/Modal'
import { Link } from 'react-router-dom'

export const Header = ({ modal, setModal }) => {
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <C.Header>
        <nav>
          <ul>
            <li className="right-animation">
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/skills">Tecnologias</Link>
              </li>
              <li>
                <Link to="/projects">Projetos</Link>
              </li>
            </ul>
            <li onClick={() => setModal(!modal)}>
              <MenuIcon width={20} height={20} style={{ cursor: 'pointer' }} />
            </li>
          </ul>
        </nav>
      </C.Header>
    </>
  )
}
