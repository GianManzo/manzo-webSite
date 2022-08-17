import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Wrapper = styled.div`
  margin: 1.5rem;

  :hover {
    cursor: default;
  }
`
export const Grid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    div.text-soudev {
      grid-area: textSouDev;
    }

    display: grid;
    max-width: 62.5rem;
    margin: 0 auto;
    grid-gap: 0 2rem;
    grid-template-areas:
      'myImage myText'
      'textSouDev ImageSouDev';
  }
`

export const Image = styled.div`
  img {
    border: 1px solid ${gray.g17};
    border-radius: 20px;
    margin-block: 1.5rem;
    max-height: 25rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-area: myImage;
    justify-self: start;
  }
`
export const Text = styled.div`
  p {
    color: ${gray.g4};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5625rem;
    margin-bottom: 1.25rem;
    text-align: left;

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
      font-size: 1rem;
    }
  }
`

export const ImageSouDev = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 25rem;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-area: ImageSouDev;
    justify-self: end;
  }
`
