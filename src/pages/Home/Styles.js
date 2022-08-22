import styled, { keyframes } from 'styled-components'
import { height_Header } from '../../components/Header/Styles'
import { gray, purple } from '../../_variables/_colors'
import { height_Footer } from '../../components/Footer/Styles'
import { rightAnimation } from '../../Global-animation'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${height_Header} - ${height_Footer});
  justify-content: center;
  margin-inline: 1.5rem;

  &:first-child {
    animation: ${rightAnimation} 1.5s ease;
  }

  h1 {
    color: ${gray.g2};
    font-family: 'Fira Sans', sans-serif;
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    color: ${gray.g6};
    font-family: 'Roboto', sans-serif;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    h1 {
      font-size: 4.25rem;
    }
  }
`

export const Btn = styled.button`
  align-items: center;
  background-color: ${gray.g19};
  border: 1px solid ${purple.p4};
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 ${purple.p4s};
  color: ${gray.g7};
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  gap: 1rem;
  justify-content: center;
  line-height: 0;
  margin-top: 1.25rem;
  opacity: 0.8;
  padding: 0.75rem 1.5rem;
  transition: 0.3s;

  :hover {
    opacity: 1;
  }
`
const rocketAppear = keyframes`
 from {
    opacity: 0;
    transform: translateY(300px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const turbinesRocket = keyframes`
  from {
    transform: skew(0deg, -1deg);
  }
`

const movePoint = keyframes`
  from {
     transform: translateY(2000px);
   }
   to {
     transform: translateY(-200px);
   }
`

const moveTwo = keyframes`
  from {
     transform: translateY(3000px);
   }
   to {
     transform: translateY(-300px);
  }
`

const moveThird = keyframes`
   from {
     transform: translateY(3000px);
   }
   to {
     transform: translateY(-300px);
   }
`

export const Rocket = styled.div`
  animation: ${rocketAppear} 1.5s ease;
  display: flex;
  justify-content: center;
  margin-inline: 1.5rem;
  margin-top: 4rem;

  path.turbines-rocket {
    animation: ${turbinesRocket} 0.2s cubic-bezier(0.6, -0.6, 0.32, 1.6)
      alternate infinite;
  }

  path.point-one {
    animation: ${movePoint} 4.5s reverse infinite;
  }

  path.point-two {
    animation: ${moveTwo} 3.5s reverse infinite;
  }

  path.point-third {
    animation: ${moveThird} 5.5s reverse infinite;
  }
`
