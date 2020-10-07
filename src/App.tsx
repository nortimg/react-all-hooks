import React, { createContext, useState } from 'react'
import Alert from './alert/Alert'
import { AlertProvider } from './alert/AlertContext'
import Main from './Main'

export const App: React.FC<{}> = props => {
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App