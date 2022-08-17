import styled from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Modal = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 2rem calc(4rem +15px) 2rem 4rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
`
export const Wrapper = styled.div`
  backdrop-filter: blur(20px);
  background: rgba(24, 24, 24, 0.79);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 480px;
  overflow-y: scroll;
  width: 380px;
  -webkit-backdrop-filter: blur(20px);

  @media (min-width: 768px) {
    width: 480px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    backdrop-filter: blur(120px);
    background-color: rgba(255, 255, 255, 0);
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
    border-bottom: 1px solid ${gray.g12};
    color: ${gray.g2};
    font-family: 'Fira Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0.75rem;
    padding: 1rem;
  }

  a {
    align-items: center;
    color: ${gray.g5};
    display: flex;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    gap: 1rem;
    opacity: 0.7;
    padding: 0.75rem 1rem;
    text-decoration: none;
    transition: 0.3s;

    :hover {
      background-color: ${gray.g12};
      color: #fff;
      opacity: 1;
    }
  }
`
