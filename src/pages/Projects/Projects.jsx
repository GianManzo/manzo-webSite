import React from 'react'
import * as C from './Styles'
import { Title } from '../../components/Title/Title'
import { CardProject } from '../../components/CardProject/CardProject'

export const Projects = () => {
  return (
    <>
      <section>
        <C.Wrapper>
          <Title>
            Projetos<span>.</span>
          </Title>
          <CardProject />
        </C.Wrapper>
      </section>
    </>
  )
}
