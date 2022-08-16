import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Items = styled.li`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 500px;
  border-radius: 5px;
  position: relative;

  img {
    border-radius: 5px;
    width: 100%;
  }
  color: white;
  background-color: ${gray.g18};
  opacity: 60%;
  transition: 0.3s;
  :hover {
    opacity: 80%;
    cursor: default;
  }
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`
export const Content = styled.div`
  padding: 1.5rem;
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
`
export const Image = styled.div`
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
    font-size: 25px;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 12px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.75rem;
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
    transition: 0.3s;
    color: ${gray.g4};
    margin-top: 20px;
    display: block;
    padding: 0.75rem;
    text-align: center;
    border: 1px solid ${purple.p9};
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 ${purple.p4s};

    :hover {
      color: ${purple.p9};
    }
  }
`
export const Techs = styled.div`
  li {
    padding: 10px;
    background-color: ${gray.g14};
    border-radius: 5px;
  }
`
export const Details = styled.div`
  position: absolute;
  top: 50px;
  left: -4px;
`
