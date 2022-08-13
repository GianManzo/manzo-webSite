import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Wrapper = styled.div`
  margin-inline: 24px;
`

export const Image = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${gray.g17};
    margin-block: 24px;
    max-width: 500px;
  }
`
export const Text = styled.div`
  max-width: 500px;

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
`

export const SouDev = styled.div`
  margin-top: 80px;
  margin-bottom: 24px;
  img {
    width: 100%;
    max-width: 500px;
  }
`
