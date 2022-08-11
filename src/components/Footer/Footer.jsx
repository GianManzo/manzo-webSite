import React from 'react'
import * as C from './_Footer'
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
      <C.Nav>
        <C.Ul className="show-animation">
          <li>
            <a href="#">
              <WhatsappLogo size={25} color="#49C758" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo size={25} color="#DF0041" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterLogo size={25} color="#1D9BF0" />
            </a>
          </li>
          <li>
            <a href="#">
              <GithubLogo size={25} color="#8F8F8F" />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinLogo size={25} color="#0A66C2" />
            </a>
          </li>
          <li>
            <a href="#">
              <DiscordLogo size={25} color="#5865F2" />
            </a>
          </li>
          <li>
            <a href="#">
              <EnvelopeSimple size={25} color="#EA4335" />
            </a>
          </li>
        </C.Ul>
      </C.Nav>
    </C.Footer>
  )
}
