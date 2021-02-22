import React from 'react';
const CourseInfo = ({id,title,click}) => {
    const handleOnClick = () =>click({
        id,
        type:'SUB',
    });
    return ( <div>
        <p>{title}</p>
        <button onClick={handleOnClick}>Usuń kurs</button>
    </div> );
}
export default CourseInfo;