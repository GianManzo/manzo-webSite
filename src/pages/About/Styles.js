import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Wrapper = styled.div`
  margin: 24px;
  :hover {
    cursor: default;
  }
`

export const Image = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${gray.g17};
    margin-block: 24px;
    max-height: 400px;
  }
  @media (min-width: 768px) {
    grid-area: myImage;
    justify-self: start;
  }
`
export const Text = styled.div`
  p {
    color: ${gray.g4};
    text-align: left;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 25px;
    font-family: 'Roboto', sans-serif;
    a {
      color: ${gray.g1};
      font-style: italic;
      transition: 0.3s;
      :hover {
        color: ${purple.p1};
      }
    }
    strong {
      color: ${gray.g1};
      font-weight: bold;
    }
  }
  @media (min-width: 768px) {
    grid-area: myText;
    p {
      font-size: 16px;
    }
  }
`

export const ImageSouDev = styled.div`
  margin-top: 80px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  max-width: 400px;
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    justify-self: end;
    grid-area: ImageSouDev;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    div.text-soudev {
      grid-area: textSouDev;
    }
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-areas:
      'myImage myText'
      'textSouDev ImageSouDev';
    grid-gap: 0 2rem;
  }
`
