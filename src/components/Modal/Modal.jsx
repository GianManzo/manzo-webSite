import React from 'react'
import * as C from './Styles'
import {
  House,
  User,
  Code,
  LightbulbFilament,
  EnvelopeSimple,
  WhatsappLogo,
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo
} from 'phosphor-react'
import { Link } from 'react-router-dom'

export const Modal = ({ setUrl, setModal }) => {
  const handleClick = e => {
    if (e.target === e.currentTarget) setModal(false)
  }

  const handleClickLink = e => {
    if (e.target.nodeName === 'A') setModal(false)
  }

  return (
    <>
      <C.Modal onClick={handleClick}>
        <C.Wrapper onClick={handleClickLink} className="modal-animation">
          <div>
            <p>G E R A L</p>
            <nav>
              <ul onClick={() => setUrl(window.location.href)}>
                <li>
                  <Link to="/">
                    <House size={25} /> Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/sobre">
                    <User size={25} /> Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/tecnologias">
                    <Code size={25} />
                    Tecnologias
                  </Link>
                </li>
                <li>
                  <Link to="/projetos">
                    <LightbulbFilament size={25} />
                    Projetos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p>L I N K S</p>

            <nav>
              <ul>
                <li>
                  <a
                    href="mailto:ggianmanzo@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EnvelopeSimple size={25} />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=+5519989873771&text=Ola. Gostei do seu portfólio, podemos conversar?!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo size={25} />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/gianmanzoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramLogo size={25} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/GianManzo3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterLogo size={25} />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/GianManzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogo size={25} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gianmanzo/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedinLogo size={25} />
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/v9BrTMhJKR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiscordLogo size={25} />
                    Discord
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </C.Wrapper>
      </C.Modal>
    </>
  )
}
