import React, { useState, useContext } from "react";


const itemsContext = React.createContext()

export const useItemsContext = () => {
    return useContext(itemsContext)
}

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(
        [{ id: 1, text: 'eat', isCompleted: false },
        { id: 2, text: 'buy food', isCompleted: false },
        { id: 3, text: 'sell food', isCompleted: false }]
    )

    return (
        <itemsContext.Provider value={{ items, setItems }}>
            {children}
        </itemsContext.Provider>

    )

}