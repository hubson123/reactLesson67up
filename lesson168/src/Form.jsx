import React, { useState } from 'react';
import {useCommentsStore} from '/stores/hooks';
const Form = () => {
    const [inputData,setInputData] = useState('')
    const [addComment] = useCommentsStore();
    const handleChange = e =>{
        setInputData(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        const comment ={
            id: Date.now(),
            comment: inputData
        }
        addComment(comment);
        setInputData('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
          <label>Wpisz komentarz:
              <input onChange={handleChange} type="text"
              value={inputData} />
              </label>  
        </form>
     );
}
 
export default Form;
<form>

</form>