import React from 'react'
import * as C from './Styles'
import { ReactComponent as Details } from '../../assets/details.svg'

export const Title = ({ children }) => {
  return (
    <>
      <C.Box_Title className="right-animation">
        <h1>{children}</h1>
        <C.Details>
          <Details />
        </C.Details>
      </C.Box_Title>
    </>
  )
}
