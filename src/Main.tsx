import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {
    const { show } = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={show} className="btn-success btn">Показать alert</button>
        </>
    )
}