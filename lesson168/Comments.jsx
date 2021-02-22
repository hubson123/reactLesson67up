import { observer } from 'mobx';
import React from 'react';
import {useCommentsStore} from './stores/hooks';
const Comments = () => {
    const [comments,removeComment]= useCommentsStore();
    const handleClick = e =>{
        const id = Number(e.target.dataset.id);
        removeComment(id);
    }
    const commenElements = comments.map(comm =>(
        <li key={comm.id}>
            <p>{comm.comment}</p>
            <button data-id={comm.id} onClick={handleClick}>Usun komentarz</button>
        </li>
    ))

    return (  <ul>
{commenElements}
    </ul>);
}
 
export default observer(Comments);