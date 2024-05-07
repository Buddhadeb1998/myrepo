import React from 'react'

const Editperson = () => {
    const handleGetdata=()=>{
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const foo = params.get('id');
        var url = API+foo
        console.log(url)
        axios
            .get(url)
            .then((response)=>{console.log(response.data)}
            )
            .catch();
    
            console.log(response);
      }
      useEffect(()=>{
        handleGetdata() 
     },[])
    
    
  return (
    <div>
      
    </div>
  )
}

export default Editperson
