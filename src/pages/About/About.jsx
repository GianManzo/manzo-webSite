import React from 'react'
import * as C from './Styles'
import { Title } from '../../components/Title/Title'
import MyPhoto from '../../assets/myPhoto-opti.jpg'
import SouDev from '../../assets/soudev.svg'

export const About = () => {
  return (
    <>
      <section className="right-animation">
        <C.Wrapper>
          <Title>
            Sobre<span>.</span>
          </Title>
          <C.Image>
            <img src={MyPhoto} alt="Foto de perfil Gian Manzo" />
          </C.Image>
          <C.Text>
            <p>
              <strong>Desenvolvedor front-end</strong>, com experiência em
              projetos pessoais. Iniciando no desenvolvimento de fato em inicio
              de 2021, sou um entusiasta visando as novas tecnologias do mercado
              com aprendizado contínuo diariamente.
            </p>
            <p>
              Possuo foco nas seguintes tecnologias:{' '}
              <strong>
                JavaScript, React, Redux, Styled-components, SASS, CSS3
              </strong>{' '}
              dentre outras que utilizo para criação de aplicações web de alto
              nível e valor. Flexibilidade com mobile first ou desktop.
              Atualmente estudo <strong>TypeScript</strong> .
            </p>
            <p>
              Me considero ágil, com extrema consistência em aprender uma nova
              tecnologia e me adaptar com mudanças. Pronto para superar
              barreiras e desafios.{' '}
              <strong>Otimista, perseverante e esforçado</strong>. Essas são
              palavras que me descrevem!
            </p>
          </C.Text>
          <C.SouDev>
            <img src={SouDev} alt="Logo Soudev" />
          </C.SouDev>
          <C.Text>
            <p>
              <strong>A SOUDEV</strong>, é uma comunidade que ajudo a{' '}
              <strong>administrar</strong>, que tem como objetivo reunir pessoas
              ou desenvolvedores iniciantes que buscam entrar na área ou tirar
              dúvidas relacionadas as suas respectivas linguagens.
            </p>
            <p>
              Atualmente contamos com <strong>+1.6mil</strong> membros
              iniciantes em programação no{' '}
              <strong>
                <a
                  href="https://discord.gg/v9BrTMhJKR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>{' '}
              </strong>{' '}
              , <strong>+28mil</strong> no{' '}
              <strong>
                <a
                  href="https://www.tiktok.com/@canalsoudev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>{' '}
              </strong>
              e <strong>+1.9mil</strong> no{' '}
              <strong>
                <a
                  href="https://t.me/+Q2zISzkU2TpmM2E5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </strong>
            </p>
            <p>
              Minha função de administrador na comunidade tem como propósito
              tirar <strong>dúvidas</strong>, organizar todo sistema do servidor
              no Discord e estou iniciando a criação do web site para a mesma.
            </p>
          </C.Text>
        </C.Wrapper>
      </section>
    </>
  )
}
