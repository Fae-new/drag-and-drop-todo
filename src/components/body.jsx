import React, { useState } from "react";

import Navbar from "./navbar";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { InputAdornment } from "@mui/material";
import ListItems from "./listItems";
import { useItemsContext } from "../Itemscontext";


const TodoBody = () => {
  const { setItems } = useItemsContext()



  const [input, setInput] = useState('')




  const handleChange = (e) => {
    setInput(() => {
      const { value } = e.target
      return (value)
    })
  }

  const addItem = () => {
    if (input.length !== 0) setItems(prev => [...prev, { id: new Date().getTime().toString(), text: input, isCompleted: false }])
    setInput('')
  }


  return (
    <div>
      <Navbar />
      <div className="todoInput">
        <TextField
          autoComplete='off'
          placeholder="Create new todo... "
          fullWidth
          id="outlined-start-adornment"
          size="normal"
          sx={{ backgroundColor: 'white', borderRadius: '10px', margin: '20px 0px' }}
          value={input}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              < AddCircleOutlineIcon fontSize="large" sx={{ cursor: 'pointer' }} onClick={addItem} /></InputAdornment>,
          }}
        />
      </div>
      <ListItems />

    </div>
  )
}

export default TodoBody;