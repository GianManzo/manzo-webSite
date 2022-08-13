import React from 'react'
import * as C from './Styles'
import {
  WhatsappLogo,
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
  EnvelopeSimple
} from 'phosphor-react'

export const Footer = () => {
  return (
    <C.Footer>
      <nav>
        <ul className="show-animation">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=+5519989873771&text=Ola. Gostei do seu portfólio, podemos conversar?!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={25} color="#49C758" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gianmanzoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={25} color="#DF0041" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/GianManzo3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogo size={25} color="#1D9BF0" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GianManzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={25} color="#8F8F8F" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gianmanzo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedinLogo size={25} color="#0A66C2" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/v9BrTMhJKR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo size={25} color="#5865F2" />
            </a>
          </li>
          <li>
            <a
              href="mailto:ggianmanzo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple size={25} color="#EA4335" />
            </a>
          </li>
        </ul>
      </nav>
    </C.Footer>
  )
}
