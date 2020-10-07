import React, { useContext, useState, useReducer } from 'react'

const AlertToggleContext = React.createContext(() => { })

export const AlertContext = React.createContext<any>({})

export const useAlert = () => useContext(AlertContext)
export const useAlertToggle = () => useContext(AlertToggleContext)

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state: any, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, visible: true }
        case HIDE_ALERT:
            return { ...state, visible: true }
        default:
            return state
    }
}

export const AlertProvider: React.FC<{}> = ({ children }) => {
    // const [alert, setAlert] = useState(false)
    // const toggle = () => setAlert(prev => !prev)
    const [state, dispatch] = useReducer(reducer, false)

    const show = () => dispatch({ type: 'show' })
    const hide = () => dispatch({ type: 'hide' })

    return (
        <AlertContext.Provider value={{show, hide}}>
            <AlertToggleContext.Provider value={show}>
                {children}
            </AlertToggleContext.Provider>
        </AlertContext.Provider>
    )
}
