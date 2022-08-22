import React from 'react'
import projects from '../../data/_projects.json'
import * as C from './Styles'
import { ReactComponent as Details } from '../../assets/Rectangle.svg'

export const CardProject = () => {
  return (
    <C.Ul>
      {projects.map(item => (
        <C.Items key={item.id}>
          <C.Container>
            <C.Details>
              <Details />
            </C.Details>
            <C.Content>
              <C.Image>
                <img src={item.image} alt={item.description} />
              </C.Image>
              <C.Infos>
                <C.Descriptions>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <span>Ao Vivo </span>
                  </a>
                  <a href={item.repo} target="_blank" rel="noreferrer">
                    <span>GitHub </span>
                  </a>
                </C.Descriptions>
                <C.Techs>
                  <h2>Tecnologias</h2>
                  <ul>
                    {item.stacks.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </C.Techs>
              </C.Infos>
            </C.Content>
          </C.Container>
        </C.Items>
      ))}
    </C.Ul>
  )
}
