import React, {useState} from 'react';
const Form = ({addHandler}) => {
    const [inputData,setInputData]=useState('');

const handleOnChange = e=>{
    setInputData(e.target.value)
}
const handleOnClick = ()=>{
    const newCourse ={
        id:Math.floor(Math.random()*1000),
        title:inputData,
    };
    addHandler({type:'ADD',data:newCourse})
setInputData('');
}

    return ( <div>
        <input type="text" value={inputData} onChange={handleOnChange} />
<button onClick={handleOnClick}>Dodaj kurs</button>
    </div> );
}
 
export default Form;