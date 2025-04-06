import React from 'react'
import Tabs from './Tabs'


const Random =()=>{
    return <div>This is random TAB</div>
}

const Index = () => {

 
   
    const tabarray =  [
        {
            label:'TAB1',
            content:<div>this is Tab 1</div>
        },
        {
            label:'TAB2',
            content:<div>this is Tab 2</div>
        },
        {
            label:'TAB3',
            content:<Random />
        }
    ]
    function handletabechange(id){
        console.log(id)
    }

  return (
    <Tabs value={tabarray} onchange={handletabechange} />
    // <div>index</div>
  )
}

export default Index