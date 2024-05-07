const Todolist=(props)=>{
    

    
  return(
    <>
    <div >
    <i class="fa fa-times" 
    aria-hidden="true" 
     
   onClick={()=>props.onselect(props.id)}/>
   <li>{props.text}</li>
    
   
    </div>
    </>
  )
}
export default Todolist;