import React, { useLayoutEffect } from 'react';
const Traingle = () => {
    useLayoutEffect(()=>{const element = document.querySelector('.triangle');
    element.style.top='50%';
    element.style.left='50%';
    element.style.transform='translate(-50%,-50%) rotate (90deg)';
},[])
    return ( <div className="triangle">

    </div> );
}
 
export default Traingle;