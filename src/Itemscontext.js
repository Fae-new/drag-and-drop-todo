import React, { useState, useContext } from "react";


const itemsContext = React.createContext()

export const useItemsContext = () => {
    return useContext(itemsContext)
}

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    return (
        <itemsContext.Provider value={{ items, setItems }}>
            {children}
        </itemsContext.Provider>

    )

}