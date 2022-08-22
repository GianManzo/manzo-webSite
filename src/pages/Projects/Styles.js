import styled, { keyframes } from 'styled-components'
import { gray, purple } from '../../_variables/_colors'

export const Wrapper = styled.div`
  margin-inline: 24px;
`

const arrowAnimation = keyframes`
   from {
     transform: translateX(4px);
   }
   to {
     transform: translateX(0);
   } 
`

export const More = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    align-items: center;
    background-color: ${gray.g19};
    border: 1px solid ${purple.p4};
    border-radius: 5px;
    box-shadow: 0 1px 2px 0 ${purple.p4s};
    color: ${gray.g7};
    display: flex;
    justify-content: center;
    line-height: 0;
    margin: 0.75rem 0 3rem 0;
    opacity: 0.8;
    padding: 0.75rem 1.5rem;
    transition: 0.3s;
    text-decoration: none;
    gap: 1rem;

    svg:first-child {
      animation: ${arrowAnimation} 0.8s alternate-reverse ease-in-out infinite;
    }

    :hover {
      opacity: 1;
    }
  }
`
