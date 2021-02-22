import React from 'react';
const Counter = ({index,callback}) => {
    console.log(`render licznika ${index}`)
    return ( <div>
                <button onClick={callback} >Zwiększ licznik {index} </button>
                </div>
);
}
 
export default React.memo(Counter);