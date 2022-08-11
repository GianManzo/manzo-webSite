import styled from 'styled-components'
import { height_Header } from '../../components/Header/_Header'
import { gray, purple } from '../../_variables/_colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${height_Header});
  margin-inline: 24px;
`
export const Wrapper = styled.div`
  background-color: ${gray.c19};
`

export const Title = styled.h1`
  color: ${gray.c2};
  font-family: 'Fira Sans', sans-serif;
  font-size: 48px;
  font-weight: 600;
`

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${gray.c6};
  margin-top: 1rem;
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 120px;
  height: 48px;
  font-size: 12px;
  margin-top: 20px;
  background-color: ${gray.c19};
  color: ${gray.c7};
  border: 1px solid ${purple.p4};
  box-shadow: 0 1px 2px 0 ${purple.p4s};
  border-radius: 5px;
  cursor: pointer;
`

export const Rocket = styled.div`
  display: flex;
  justify-content: center;
  margin-inline: 24px;
`
