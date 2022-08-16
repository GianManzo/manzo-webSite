import styled from 'styled-components'
import { height_Header } from '../../components/Header/Styles'
import { gray, purple } from '../../_variables/_colors'
import { height_Footer } from '../../components/Footer/Styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${height_Header} - ${height_Footer});
  margin-inline: 24px;
  h1 {
    color: ${gray.g2};
    font-family: 'Fira Sans', sans-serif;
    font-size: 48px;
    font-weight: 600;
  }
  p {
    font-family: 'Roboto', sans-serif;
    color: ${gray.g6};
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    h1 {
      font-size: 68px;
    }
  }
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 12px;
  margin-top: 20px;
  background-color: ${gray.g19};
  color: ${gray.g7};
  border: 1px solid ${purple.p4};
  border-radius: 5px;
  cursor: pointer;
  line-height: 0;
  opacity: 80%;
  box-shadow: 0 1px 2px 0 ${purple.p4s};
  transition: 0.3s;
  :hover {
    opacity: 100%;
  }
`

export const Rocket = styled.div`
  display: flex;
  justify-content: center;
  margin-inline: 24px;
  margin-top: 4rem;
`
