import React from 'react'
import { useThemeContext } from '../themecontext';

const NoItem = ({tab}) => {
const {theme}=useThemeContext()
    return(
        <div className='noItems'
         style={theme?{backgroundColor:'white',boxShadow:'0px 0px 5px rgb(163, 162, 162)'}:
         {backgroundColor:' hsl(235, 24%, 19%)',boxShadow:'0px 0px 1px rgb(163, 162, 162)',color:'#E8E8E8'}}>
            <h3 >You don't have any {tab} items yet </h3>
            <p>Input text and click + icon to add some</p>
         </div>
    )
}







export default NoItem;