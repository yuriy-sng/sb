import React from 'react'

type Props = {
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button data-testid="button" style={{ background: "#777", border: "none", padding: "0.5rem", borderRadius: "4px", color: "white" }} onClick={onClick}>{children}</button>
  )
}
