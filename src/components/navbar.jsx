import React, { useMemo } from "react";

import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useThemeContext } from "../themecontext";


const Navbar = () => {

  const { theme, setTheme } = useThemeContext()

  useMemo(() => {
    const bodyStyle = document.body.style
    theme ? bodyStyle.backgroundColor = 'white' : bodyStyle.backgroundColor ='rgb(20,20,20)'
  }
    , [theme])

  const changeTheme = () => {
    setTheme(prev => !prev)

  }

  return (<div className="navBar">
    <h1>TODO</h1>
    <div onClick={changeTheme}>
      {theme ?
        <ModeNightIcon sx={{ cursor: 'pointer' }} fontSize="large" /> :
        <WbSunnyIcon sx={{ cursor: 'pointer' }} fontSize="large" />}
    </div>
  </div>)
}

export default Navbar

