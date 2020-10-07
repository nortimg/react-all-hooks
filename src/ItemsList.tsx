import React, { useEffect, useState } from 'react'

export default function ItemsList({ getItems }: {getItems: Function}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems() 
        console.log('render')
        
        setItems(newItems)
    }, [getItems])

    return (
        <ul>
            {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
    )
}