import React, { useContext } from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {
    const alert = useAlert()

    if (!alert) return null 

    return (
        
        <div className="alert alert-danger" onClick={alert.hide}>
            Это очень и очень важное сообщение
        </div>
    )
}