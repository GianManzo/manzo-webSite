import React from 'react'
import * as C from './Styles'
import { Title } from '../../components/Title/Title'
import { CardProject } from '../../components/CardProject/CardProject'
import { GithubLogo, ArrowRight } from 'phosphor-react'

export const Projects = () => {
  return (
    <>
      <section>
        <C.Wrapper>
          <Title>
            Projetos<span>.</span>
          </Title>
          <CardProject />
          <C.More>
            <a
              href="https://github.com/GianManzo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              More in <ArrowRight size={20} />
              <GithubLogo size={25} />
            </a>
          </C.More>
        </C.Wrapper>
      </section>
    </>
  )
}
