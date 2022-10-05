import React, { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'gray',
        borderRadius:'5px',
        padding:'10px'
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
