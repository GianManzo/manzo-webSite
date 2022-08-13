import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem +15px) 2rem 4rem;
  color: white;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 380px;
  height: 480px;
  background: rgba(24, 24, 24, 0.79);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(120px);
    -webkit-backdrop-filter: blur(120px);
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${purple.p9};
    border-radius: 5px;
  }

  ul {
    margin-bottom: 3rem;
  }
  p {
    font-size: 14px;
    font-family: 'Fira Sans', sans-serif;
    padding: 1rem;
    color: ${gray.g2};
    border-bottom: 1px solid ${gray.g12};
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${gray.g5};
    gap: 1rem;
    padding: 0.75rem 1rem;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    opacity: 70%;
    transition: 0.3s;
    :hover {
      background-color: ${gray.g12};
      color: #fff;
      opacity: 100%;
    }
  }
`
