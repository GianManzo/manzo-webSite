import React, { useEffect, useState } from 'react'
import * as C from './Styles'
import { ReactComponent as Logo } from '../../assets/Marca.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import { Modal } from '../Modal/Modal'
import { Link } from 'react-router-dom'

export const Header = ({ modal, setModal }) => {
  const [url, setUrl] = useState(null)
  const links = Array.from(document.querySelectorAll('li a'))

  useEffect(() => {
    const pathName = url?.replace('http://localhost:3000/', '')
    addClass(pathName)
  }, [url, links])

  const addClass = pathName => {
    if (pathName) {
      links.map(link =>
        pathName === link.innerHTML.toLowerCase()
          ? link.classList.add('active')
          : link.classList.remove('active')
      )
    } else {
      links.map(link => link.classList.remove('active'))
    }
  }

  return (
    <>
      {modal && <Modal setUrl={setUrl} setModal={setModal} />}
      <C.Header>
        <nav>
          <ul onClick={() => setUrl(window.location.href)}>
            <li className="right-animation">
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/tecnologias">Tecnologias</Link>
              </li>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
            </ul>
            <li onClick={() => setModal(!modal)}>
              <MenuIcon width={20} height={20} />
            </li>
          </ul>
        </nav>
      </C.Header>
    </>
  )
}
