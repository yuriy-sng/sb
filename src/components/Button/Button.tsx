import React from 'react'

type Props = {
  onClick: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
