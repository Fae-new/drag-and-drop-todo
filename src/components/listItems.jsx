import React, { useState } from "react";
import { useItemsContext } from "../Itemscontext";
import { Reorder } from "framer-motion";
import checkIcon from '../assets/images/icon-check.svg'
import Tab from "./tabLinks";
const ListItems = () => {
    const { items, setItems } = useItemsContext()
    const [filter, setFilter] = useState('All')

    const changeFilter = (filterValue) => {
        setFilter((prev) => {
            document.getElementById(prev).style.color = 'grey'
            document.getElementById(filterValue).style.color = 'black'
            return filterValue
        }
        )
    }

    const clearCompleted = () => setItems(items.filter(item => item.isCompleted === false))


    const handleClick = (e) => {
        let newArray = items.map((element) => {
            if (element.text === e.target.nextSibling.id) {
                element.isCompleted = !element.isCompleted
            }
            return element
        })

        setItems(newArray)
    }


    return (
        <div className="todolist">

            <Reorder.Group as="div" axis='y' values={items} onReorder={setItems}>
                {items.filter((todoItem) => {
                    if (filter === 'All') {
                        return (items)
                    }
                    else if (filter === 'Completed') {
                        return (todoItem.isCompleted === true)
                    }
                    else { return (todoItem.isCompleted !== true) }
                })

                    .map((todoItem) => {
                        return (
                            <Reorder.Item
                                key={todoItem.id}
                                value={todoItem}
                                style={{ display: 'flex', boxShadow: '0px 0px 1px black', height: '50px', alignItems: 'center' }}>

                                <div onClick={handleClick}
                                    className={todoItem.isCompleted ? 'tick' : 'notick'}
                                    style={{
                                        borderRadius: '100%', border: '1px solid hsl(280, 87%, 65%)', width: '17px', height: '17px', marginTop: '2px', marginLeft: '5px'
                                    }}>
                                    <img alt='check' style={{ display: 'flex', marginTop: '4px', marginLeft: '2px', pointerEvents: 'none', }}
                                        src={checkIcon} />
                                </div>
                                <p id={todoItem.text} style={{ marginLeft: '8px', fontSize: '18px' }}>{todoItem.text}</p>
                            </Reorder.Item>
                        )
                    })}
            </Reorder.Group>

            <Tab
                items={items}
                changeFilter={changeFilter}
                handleClick={clearCompleted} />

        </div>
    )

}


export default ListItems;