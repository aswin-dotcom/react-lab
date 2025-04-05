import React from 'react'
import Item from './Menu-item'

const List = ({menus}) => {
  return (
    <div>{
        menus && menus.length>0 ?
         menus.map((item)=> <Item item={item} />)
        :<div>no data</div>
   }</div>
  )
}

export default List