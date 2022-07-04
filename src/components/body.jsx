import React, { useState } from "react";
import Navbar from "./navbar";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { InputAdornment } from "@mui/material";
import ListItems from "./listItems";
import { useItemsContext } from "../Itemscontext";
import { useThemeContext } from "../themecontext";


const TodoBody = () => {
  const { setItems } = useItemsContext()
  const [input, setInput] = useState('')
  const { theme } = useThemeContext()


  const handleChange = e => setInput(() => (e.target.value))

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
          color='secondary'

          sx={theme ? { backgroundColor: 'white', borderRadius: '10px', margin: '20px 0px', input: { color: 'black' } } :
            { backgroundColor: ' hsl(235, 24%, 19%)', borderRadius: '10px', margin: '20px 0px', input: { color: 'white' } }}
          value={input}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              < AddCircleOutlineIcon fontSize="large" sx={theme ? { cursor: 'pointer' } : { color: '#E8E8E8', cursor: 'pointer' }} onClick={addItem} /></InputAdornment>,
          }}
        />
      </div>
      <ListItems />
      <p style={{ textAlign: 'center', color: 'grey', marginTop: '30px' }}>Drag and drop to re-order items</p>

    </div>
  )
}

export default TodoBody;