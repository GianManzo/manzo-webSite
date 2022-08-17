import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Items = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

export const Container = styled.div`
  background-color: ${gray.g18};
  border-radius: 5px;
  max-width: 500px;
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
  grid-gap: 44px;
  margin-block: 20px;

  h2 {
    color: ${gray.g1};
    font-family: 'Fira Sans', sans-serif;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`
export const Descriptions = styled.div`
  p {
    color: ${gray.g4};
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    margin-bottom: 20px;
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
    margin-top: 20px;
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
      padding: 10px;
    }
  }
`
