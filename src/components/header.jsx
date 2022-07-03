
import React from "react";
import { useThemeContext } from "../themecontext";



const Header = () => {

    const { theme } = useThemeContext()
    return (
        <div className={theme ? "heroImage" : 'heroImageDark'} />
    )
}


export default Header;