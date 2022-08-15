import React from 'react'
import * as C from './Styles'
import { Title } from '../../components/Title/Title'
import { ListSkills } from '../../data/_ListSkills'

export const Skills = () => {
  return (
    <>
      <section className="right-animation">
        <C.Wrapper>
          <Title>
            Tecnologias<span>.</span>
          </Title>
          <C.Grid>
            {ListSkills.map(item => (
              <C.Icon key={item.id}>
                {item.component}
                <p style={{ color: item.color }}>{item.key}</p>
              </C.Icon>
            ))}
          </C.Grid>
        </C.Wrapper>
      </section>
    </>
  )
}
