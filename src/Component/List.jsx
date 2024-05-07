import { useState } from "react";
import Todolist from "./Todolist"

  
  const List=()=>{
    const [inItem,setItem]=useState("")
    const [value,setValue]=useState([])

     

     const ItemHandler=(event)=>{
       setItem(event.target.value)
     }

      const listofItem=()=>{
        setValue((oldItem)=>{
          return[...oldItem,inItem]

        })
        setItem("");
        
      }

      const listHandler=(id)=>{
        setValue((oldItem)=>{
          return oldItem.filter((arrayele,index)=>{
            return index!==id
          })
        })
      }
      


      return(
       <>
        <div>
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder="type of text" onChange={ItemHandler}/>
        <button onClick={listofItem}>+</button>
        <ol>
        { value.map((valueItem,index)=>{
           return(
            <Todolist
            
            text={valueItem}
            id={index}
            
            
            
            onselect={listHandler}
            />
            
            

          )

         })}
        </ol>
      
      </div>
      </>
    )

  }
  export default List;