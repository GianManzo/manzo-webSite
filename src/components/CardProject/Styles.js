import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'
import { rightAnimation } from '../../Global-animation'

export const Ul = styled.ul`
  animation: ${rightAnimation} 1.5s ease;
`

export const Items = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

export const Container = styled.div`
  background-color: ${gray.g18};
  border-radius: 5px;
  max-width: 31.25rem;
  opacity: 0.8;
  position: relative;
  transition: 0.3s;

  :hover {
    opacity: 1;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
  }
`
export const Details = styled.div`
  position: absolute;
  left: -4px;
  top: 50px;
`

export const Content = styled.div`
  padding: 1.5rem;

  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    gap: 4rem;
  }
`
export const Image = styled.div`
  img {
    border-radius: 5px;
    width: 100%;
  }

  @media (min-width: 992px) {
    max-width: 500px;
  }
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.75rem;
  margin-block: 1.25rem;

  h2 {
    color: ${gray.g1};
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.5625rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
`
export const Descriptions = styled.div`
  p {
    color: ${gray.g4};
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 0.875rem;
    font-weight: 100;
    line-height: 1.25rem;
    margin-bottom: 1.25rem;
  }

  a {
    text-decoration: none;
  }

  span {
    color: ${gray.g4};
    display: block;
    border: 1px solid ${purple.p9};
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 ${purple.p4s};
    margin-top: 1.25rem;
    padding: 0.75rem;
    text-align: center;
    transition: 0.3s;

    :hover {
      color: ${purple.p9};
    }
  }
`
export const Techs = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      background-color: ${gray.g14};
      border-radius: 5px;
      color: ${gray.g1};
      padding: 0.625rem;
    }
  }
`
