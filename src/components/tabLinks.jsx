import React from 'react'

const Tab=({items,changeFilter,handleClick})=>{
    
return(
    <div className="todoFooter">
    <p >{items.length}  Items left</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '40%' }} >
        <p id='All' onClick={(e)=>{changeFilter('All',e)}} style={{color:'black'}} className='tab'>All</p>
        <p  id='Active' onClick={(e)=>{changeFilter('Active',e)}} className='tab'>Active</p> 
        <p  id='Completed' onClick={(e)=>{changeFilter('Completed',e)}} className='tab'>Completed</p> </div>
    <p onClick={handleClick}>Clear Completed </p>
</div>
)


}



export default Tab;